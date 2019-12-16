declare abstract class Animal {
    abstract makeSound(): void;
    move(): void;
}
declare class Cat extends Animal {
    makeSound(): void;
}
declare const cat: Cat;
declare class Car {
    run(): void;
}
declare const car: Car;
declare class Book {
    private getName;
    callGetName(): void;
}
declare const book: Book;
declare class Person {
    protected getName(): void;
}
declare class Student extends Person {
    init(): void;
}
declare const person: Person;
declare const student: Student;
