import Base_ from './item/item';
import Node_ from './item/node';
import Edge_ from './item/edge';
import Group_ from './item/group';
import Guide_ from './item/guide';
namespace Item {
  export type Type = Base_.Type;
  export namespace Type {
    export type Node = Item.Node['type'];
    export type Edge = Item.Edge['type'];
    export type Group = Item.Group['type'];
    export type Guide = Item.Guide['type'];
  }

  export interface Base extends Base_ { }
  export interface Node extends Node_ { }
  export interface Edge extends Edge_ { }
  export interface Group extends Group_ { }
  export interface Guide extends Guide_ { }

  export type Map<T extends Type | 'base' = 'base'> =
    T extends 'node' ? Node :
    T extends 'edge' ? Edge :
    T extends 'group' ? Group :
    T extends 'guide' ? Guide : Base;
}
type Item = Item.Base;
export default Item;
