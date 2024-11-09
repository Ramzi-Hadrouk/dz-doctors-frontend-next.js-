'use strict';

/**
 * testapi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::testapi.testapi');
