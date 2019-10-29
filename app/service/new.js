/* eslint-disable */

const Service = require('egg').Service

class NewsService extends Service{
    async getNewsList() {
        // 通过接口获取新闻数据
        var list = ['新闻1','新闻2','新闻3']
        return list
    }
}
module.exports = NewsService