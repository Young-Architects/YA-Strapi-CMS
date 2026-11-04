'use strict';

/**
 * config-not-found router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::config-not-found.config-not-found');
