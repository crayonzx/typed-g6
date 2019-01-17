/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

const edges: {
  common: typeof import('./common');
} = {
  common: require('./common')
};
export = edges;
