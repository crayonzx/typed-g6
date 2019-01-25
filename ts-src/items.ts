namespace Item {
  export type Base = import('./item/item');
  export type Node = import('./item/node');
  export type Edge = import('./item/edge');
  export type Group = import('./item/group');
  export type Guide = import('./item/guide');
}
type Item = Item.Base;
export default Item;
