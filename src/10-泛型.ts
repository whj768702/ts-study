// 泛型
function returnItem<T>(para: T): T {
  return para;
}
returnItem('aa');
returnItem(10);

// 多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
swap([1, 'one']);

// 泛型变量
function getArrayLength<T>(arg: Array<T> | T[]) {
  return arg.length;
}
getArrayLength([1,1,2,3,]);

// 泛型接口
interface ReturnItem<T> {
  (para: T): T;
}
const returnItem2: ReturnItem<number> = para => para;

// 泛型类
// 可以作用于类本身和成员函数.
class Stack<T> {
  private arr: T[] = [];

  public push(item: T) {
    this.arr.push(item);
  }

  public pop (): T | undefined {
    return this.arr.pop();
  }
}
const stack = new Stack<number>();
stack.push(1);
stack.pop();

// 泛型约束:明确知道泛型有哪几种类型时可以使用泛型约束
type Params = number | string;
class Stack2<T extends Params> {
  private arr: T[] = [];
  public push(item: T) {
    this.arr.push(item);
  }
  public pop(): T | undefined {
    return this.arr.pop();
  }
}
const stack2 = new Stack2<number>();
// 报错 const stack2 = new Stack2<boolean>();

// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}
const a = {
  name: 'lao wu',
  id: 1
}
getValue(a, 'id');

// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomething(): number;
}
interface SecondInterface {
  doSomethingElse(): string;
}
// 多重约束
interface ChildInterface extends FirstInterface, SecondInterface {}
class Demo<T extends ChildInterface> {
  private genericProperty!: T;
  useT() {
    this.genericProperty.doSomething();
    this.genericProperty.doSomethingElse();
  }
}

// 泛型与new
// 参数type的类型{new():T}表示此泛型T 是可被构造的。
function factory<T>(type: {new(): T}): T {
  return new type();
}