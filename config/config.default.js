/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1572356784539_6288';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  // 配置公共url
  config.url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

  return {
    ...config,
    ...userConfig,
  };
};
