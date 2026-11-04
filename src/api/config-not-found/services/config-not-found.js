'use strict';

/**
 * config-not-found service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::config-not-found.config-not-found');
