// 类型兼容性
class Person1 {
  constructor(public weight: number, public name: string, public born: string) {}
}
interface Dog {
  name: string;
  weight: number;
}
// Dog兼容了Person1,反过来Person1不能兼容Dog，Dog属性比Person1少一个。
const x: Dog = new Person1(120, 'test', '2000-01-01');
console.log(x);

// 函数的类型兼容性
let fun1 = (a1: number) => 0;
let fun2 = (b1: number, s: string) => 0;
fun2 = fun1;
// fun1 = fun2; // 报错

// 枚举的类型兼容性
enum Status {
  Ready,
  Waiting
}
let status1 = Status.Ready;
let num = 0;
status1 = num;
num = status1;

// 类的类型兼容性
// 仅仅只有实例成员和方法会相比较，构造函数和静态成员不会被检查
// 私有的和受保护的成员必须来自于相同的类
class Animal12 {
  feet: number | undefined;
  constructor(name: string, numFeet: number) {}
}
class Size12 {
  feet: number | undefined;
  constructor(meters: number) {}
}
let a12: Animal12 = new Animal12('1', 1);
let s12: Size12 = new Size12(1);
a12 = s12;
s12 = a12;

// 泛型的类型兼容性




// 题
interface Person12 {
  name: string;
  age: number;
  weight: number;
}

interface Animal121 {
  name: string;
  age: number;
  weight: number;
}

function getPersonName(p: Person12) {
  console.log(p.name);
}
const person12: Person12 = {
  name: '1',
  age: 10,
  weight: 10
}
const animal121: Animal121 = {
  name: '2',
  age: 20,
  weight: 20
};
getPersonName(person12);
getPersonName(animal121);

type Person12Type = {
  kind: 'person';
  value: Person12;
}
type Animal121Type = {
  kind: 'animal';
  value: Animal121;
}