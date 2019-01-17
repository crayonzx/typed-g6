/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

const guides: {
  common: typeof import('./common');
} = {
  common: require('./common')
};
export = guides;
