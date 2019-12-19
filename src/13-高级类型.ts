// 高级类型之交叉类型、联合类型、类型别名

// 交叉类型
// 多种类型叠加到一起成为一种类型
function mixin<T extends object, U>(first: T, second: U): T&U {
  const result = {} as T&U;
  for (const id in first) {
    (result as T)[id] = first[id];
  }
  for (const id in second) {
    if (!result.hasOwnProperty(id)) {
      (result as U)[id] = second[id];
    }
  }
  return result;
}
const a13 = mixin({a: 'hello'}, {b: 42});
console.log(a13.a);


// 联合类型
// 表示一个值可以是几种类型之一，用|分隔
const b13: number | string | boolean = 11;
console.log(b13);


// 类型别名
type some = boolean | string;
type Container<T> = {value: T};
type Tree<T> = {
  value: T;
  left: Tree<T>;
  right: Tree<T>;
};