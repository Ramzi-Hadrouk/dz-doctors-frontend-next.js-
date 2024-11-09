'use strict';

/**
 * testapi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::testapi.testapi');
