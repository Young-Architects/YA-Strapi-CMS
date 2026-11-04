'use strict';

const SYSTEM_ATTRIBUTES = new Set(['createdBy', 'updatedBy', 'localizations']);

const buildPopulateTree = (attributes, components, stack = new Set()) => {
  const populate = {};

  for (const [name, attribute] of Object.entries(attributes || {})) {
    if (SYSTEM_ATTRIBUTES.has(name) || attribute.private) continue;

    if (attribute.type === 'component' && attribute.component) {
      const component = components[attribute.component];
      if (!component) continue;

      if (stack.has(attribute.component)) {
        populate[name] = true;
        continue;
      }

      const nestedStack = new Set(stack);
      nestedStack.add(attribute.component);
      const nestedPopulate = buildPopulateTree(component.attributes, components, nestedStack);
      populate[name] = Object.keys(nestedPopulate).length
        ? { populate: nestedPopulate }
        : true;
      continue;
    }

    if (attribute.type === 'media') {
      populate[name] = true;
      continue;
    }

    // Runtime content types contain private admin relations (for example
    // createdBy). They are not valid Content API populate keys.
    if (attribute.type === 'relation' && !attribute.target?.startsWith('admin::')) {
      populate[name] = true;
    }
  }

  return populate;
};

const findContentType = (strapi, endpointName) => Object.values(strapi.contentTypes).find((contentType) => {
  if (!contentType.uid?.startsWith('api::')) return false;
  const routeName = contentType.kind === 'singleType'
    ? contentType.info?.singularName
    : contentType.info?.pluralName;
  return routeName === endpointName;
});

module.exports = (_config, { strapi }) => async (ctx, next) => {
  if (ctx.method !== 'GET') return next();

  const pathParts = ctx.path.split('/').filter(Boolean);
  if (pathParts[0] !== 'api' || !pathParts[1]) return next();

  const contentType = findContentType(strapi, pathParts[1]);
  if (!contentType) return next();

  if (ctx.query.populate === undefined) {
    const populate = buildPopulateTree(contentType.attributes, strapi.components);
    if (Object.keys(populate).length > 0) {
      ctx.query = { ...ctx.query, populate };
    }
  }

  return next();
};
