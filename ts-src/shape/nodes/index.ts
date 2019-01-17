/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

const nodes: {
  common: typeof import('./common');
  html: typeof import('./html');
} = {
  common: require('./common'),
  html: require('./html')
};
export = nodes;
