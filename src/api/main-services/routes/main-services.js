'use strict';

/**
 * main-services router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::main-services.main-services');
