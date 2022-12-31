'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async changePasswordPost(ctx, next) {
    console.log("changePasswordPost: controller", ctx.request.body);
    const { newPassword, confirmPassword } = ctx.request.body;
    if (newPassword === 'admin') throw new Error();
    return newPassword === confirmPassword ? {operationStatus: "SUCCESS"} : {operationStatus: "FAILED"};
  },
};
