/**
 * @fileOverview item entry file
 * @author huangtonger@aliyun.com
 */
import { Common } from '../common';
import Node from './node';
import Edge from './edge';
import Group from './group';
import Guide from './guide';

namespace Items {
  export type Item = Node | Edge | Group | Guide;
  export type Map<
    T extends Common.ItemType = 'node'
  > = T extends Common.NodeType
    ? Node
    : (T extends Common.EdgeType
        ? Edge
        : (T extends Common.GroupType
            ? Group
            : (T extends Common.GuideType ? Guide : never)));
}

const Items = {
  Node,
  Edge,
  Group,
  Guide,
};

export = Items;
