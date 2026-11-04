'use strict';

/**
 * courses controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::courses.courses');
