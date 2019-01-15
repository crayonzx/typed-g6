/**
 * @fileOverview guide item
 * @author huangtonger@aliyun.com
 */

import { Common } from '../common';
import Util from '../util/';
import Item from './item';

class Guide extends Item<Common.GuideType> {
  constructor(cfg) {
    const defaultCfg = {
      type: 'guide',
      isGuide: true,
      zIndex: 4
    };
    const defaultCfg1 = Util.mix(defaultCfg, cfg);
    super(defaultCfg1);
  }
}

export = Guide;
