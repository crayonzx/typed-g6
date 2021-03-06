/**
 * @fileOverview mapper controller
 * @author huangtonger@aliyun.com
 */

import Base = require('./base');
import Util = require('../util/');
const CHANNEL_NAMES = [ 'color', 'shape', 'size', 'label', 'style' ];

class Controller extends Base {
  _init() {
    const channels = {};
    Util.each(CHANNEL_NAMES, channel => {
      channels[channel] = {};
      this[channel] = input => {
        channels[channel].input = input;
        return this;
      };
    });
    this.channels = channels;
  }
  addChannels(inputChannels) {
    const channels = this.channels;
    Util.each(inputChannels, (channel, name) => {
      channels[name] = {
        input: channel
      };
    });
  }
  /**
   * @param  {object} model origin model
   */
  mapping(model) {
    const channels = this.channels;
    Util.each(channels, (channel, name) => {
      if (Util.isFunction(channel.input)) {
        model[name] = channel.input(model);
      } else if (channel.input) {
        model[name] = channel.input;
      }
    });
  }
}

export = Controller;

import Model from '../model';

namespace Controller {
  type ChannalType = string | number | object | boolean | null | undefined | ((model: Model.Base) => any);

  export interface Channels {
    color?: ChannalType;
    shape?: ChannalType;
    size?: ChannalType;
    label?: ChannalType;
    style?: ChannalType;
    [x: string]: ChannalType;
  }
}
