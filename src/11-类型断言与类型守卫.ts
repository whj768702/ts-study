// 类型推断
// 谨慎使用，强制把某类型断言会造成TS丧失代码提示能力
interface Person {
  name: string;
  age: number;
}
const person = {} as Person; // as 断言
const person2: Person = {}; // TS会有提示

// 双重断言
const person3 = '123' as any as Person;

// 类型守卫
class Student {
  name = 'student';
  age = 20;
}
class Animal {
  name = 'dog';
  color = 'black';
}
function getSomething(arg: Student | Animal) {
  if (arg instanceof Animal) {
    console.log(arg.color);
  }
  if ('age' in arg) {
    console.log(arg.age);
  }
}

// 字面量类型守卫
type Foo = {
  kind: 'foo';
  foo: number;
}
type Bar = {
  kind: 'bar';
  bar: number;
}
function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo);
  }
}