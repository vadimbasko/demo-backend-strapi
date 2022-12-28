'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async resetGet(ctx, next) {
    console.log("resetGet: controller");
    return {status: "OK"}
  },
  async resetPost(ctx, next) {
    console.log("resetPost: controller");
  },
};
