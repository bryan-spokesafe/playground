type AppendArgument<T, K> = T extends (...args: infer A) => infer R
  ? (...args: [...A, K]) => R
  : never;

type Test1 = AppendArgument<() => void, number>;
type Test2 = AppendArgument<(name: string) => void, number>;
type Test3 = AppendArgument<(one: string, two: number) => void, boolean>; 

