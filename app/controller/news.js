
/* eslint-disable */

const Controller = require('egg').Controller;

class NewController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.params)
    // 异步渲染，需要使用await
    var msg= '新年快乐'
    // 调用服务里的方法
    var list = await this.service.new.getNewsList()
    await ctx.render('news',{
        msg:msg,
        list:list
    })
    // ctx.body = 'new';
  }
}

module.exports = NewController;