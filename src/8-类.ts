// 抽象类
// 作为其它派生类的基类使用。
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earch...');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('miao miao');
  }
  // move方法可以重新
}
const cat = new Cat();
cat.makeSound();
cat.move();

// 访问限定符
/* 
  public private protected 
  public: 类成员默认为public，词限定符修饰的成员可以被外部访问
*/
class Car {
  public run() {}
}
const car = new Car();
car.run();
/*
  private: 被此限定符修饰的成员只可以被类的内部访问。
*/
class Book {
  private getName() {}
  public callGetName() {}
}
const book = new Book();
// book.getName(); 报错
book.callGetName();
/*
  protected: 被此限定符修饰的成员只可以被类的内部以及类的子类访问。
*/
class Person {
  protected getName() {}
}
class Student extends Person {
  init() {
    this.getName();
  }
}
const person = new Person();
// person.getName(); 报错
const student = new Student();
student.init();
