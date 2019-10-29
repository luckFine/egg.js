/* eslint-disable */

const Service = require('egg').Service

class UserService extends Service{
    async getUser() {
        // 获取新闻数据
        var name = ''
        return {
            name:'luck',
            age:'18'
        }
    }
}
module.exports = UserService