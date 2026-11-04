'use strict';

/**
 * courses service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::courses.courses');
