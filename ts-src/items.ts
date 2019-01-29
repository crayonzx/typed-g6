import Base_ from './item/item';
import Node_ from './item/node';
import Edge_ from './item/edge';
import Group_ from './item/group';
import Guide_ from './item/guide';
namespace Item {
  export interface Base extends Base_ {}
  export interface Node extends Node_ {}
  export interface Edge extends Edge_ {}
  export interface Group extends Group_ {}
  export interface Guide extends Guide_ {}
}
type Item = Item.Base;
export default Item;
