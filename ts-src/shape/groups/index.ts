/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

const groups: {
  common: typeof import('./common');
} = {
  common: require('./common')
};
export = groups;
