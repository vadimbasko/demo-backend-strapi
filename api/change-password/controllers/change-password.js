'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async changePasswordGet(ctx, next) {
    console.log("changePasswordGet: controller", ctx.params);
    return {status: "OK"}
  },
  async changePasswordPost(ctx, next) {
    console.log("changePasswordPost: controller", ctx.request.body);
    return {status: "OK"}
  },
};
