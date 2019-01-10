/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

export = {
  common: require('./common') as typeof import('./common'),
  html: require('./html') as typeof import('./html')
};
