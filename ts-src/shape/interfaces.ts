import '../../types';
import _Shape from './shape';

export type RegisterShape = <T>(name: string, cfg: T, extendShape?: string) => ShapeObject<T>;

export type Shape = {
  registerShapeManager<T>(type: string, cfg: T): ShapeManager<T>;

  registerNode: RegisterShape;
  registerEdge: RegisterShape;
  registerGroup: RegisterShape;
  registerGuide: RegisterShape;

  Node: ShapeManager<{ defaultShapeType: 'common' }> & {
    common: typeof import('./nodes/common');
    html: typeof import('./nodes/html');
  };
  Edge: ShapeManager<{ defaultShapeType: 'common' }> & {
    common: typeof import('./edges/common');
  };
  Group: ShapeManager<{ defaultShapeType: 'common' }> & {
    common: typeof import('./groups/common');
  };
  Guide: ShapeManager<{ defaultShapeType: 'common' }> & {
    common: typeof import('./guides/common');
  };
};

export type ShapeManager<T = {}> = Overwrite<
  {
    defaultShapeType?: string | undefined | null;
    getShape(type: string, inputDefaultShape?: string): any;
    getExtendShape(extendShapeName: string, defaultShapeType?: string): any;
  },
  T
> & {
  [x: string]: ShapeObject;
};

export type ShapeObject<T = {}> = T;
