
/* eslint-disable */
const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    const { ctx } = this;
    let que = ctx.query
    console.log(que)
    ctx.body = 'admin';
  }
}

module.exports = AdminController;
