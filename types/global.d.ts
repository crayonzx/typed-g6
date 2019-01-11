declare global {
  /** 转成类似 class 的接口类型，可使用 new 方法创建对象 */
  type ToClassType<T extends TwoFunctionTypes> = T extends NewFunctionType
    ? T
    : (new (...args: ArgsType<T>) => {}) & ExcludeFunctionType<T>;

  /** 溢出接口 T 中的 () => any 和 new () => any */
  type ExcludeFunctionType<T> = Overwrite<T, {}>;

  type FunctionType = (...args: any[]) => any;
  type NewFunctionType = new (...args: any[]) => any;
  type TwoFunctionTypes = FunctionType | NewFunctionType;

  /** 获取函数的参数 */
  type ArgsType<T extends TwoFunctionTypes> = T extends (...args: infer U) => any
    ? U
    : T extends new (...args: infer U) => any
    ? U
    : [];

  /** 获取 new 方法返回的实例类型 */
  type NewReturnType<T extends NewFunctionType> = T extends new (...args: any[]) => infer U
    ? U
    : any;

  /** 获取 prototype */
  type ProtoType<T> = T extends NewFunctionType ? NewReturnType<T> : T;

  type _Overwrite<T, U> = U extends null | undefined
    ? T
    : { [P in Exclude<keyof T, keyof U>]: T[P] } & U;

  type _Overwrite2<T, U1, U2> = _Overwrite<_Overwrite<T, U1>, U2>;
  type _Overwrite3<T, U1, U2, U3> = _Overwrite<_Overwrite2<T, U1, U2>, U3>;
  type _Overwrite4<T, U1, U2, U3, U4> = _Overwrite<_Overwrite3<T, U1, U2, U3>, U4>;
  type _Overwrite5<T, U1, U2, U3, U4, U5> = _Overwrite<_Overwrite4<T, U1, U2, U3, U4>, U5>;
  type _Overwrite6<T, U1, U2, U3, U4, U5, U6> = _Overwrite<_Overwrite5<T, U1, U2, U3, U4, U5>, U6>;

  /** 混合并覆盖接口的属性 */
  type Overwrite<
    T,
    U1,
    U2 = undefined,
    U3 = undefined,
    U4 = undefined,
    U5 = undefined,
    U6 = undefined
  > = _Overwrite6<T, U1, U2, U3, U4, U5, U6>;
}

export {};
