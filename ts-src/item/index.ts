/**
 * @fileOverview item entry file
 * @author huangtonger@aliyun.com
 */
import Item_ from './item';

import Node_ = require('./node');
import Edge_ = require('./edge');
import Group_ = require('./group');
import Guide_ = require('./guide');

namespace Items {
  export interface Base extends Item_ {}
  export interface Node extends Node_ {}
  export interface Edge extends Edge_ {}
  export interface Group extends Group_ {}
  export interface Guide extends Guide_ {}
}

const Items = {
  Node: Node_,
  Edge: Edge_,
  Group: Group_,
  Guide: Guide_,
};

export = Items;