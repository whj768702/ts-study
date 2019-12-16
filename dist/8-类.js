"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('miao miao');
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.makeSound();
cat.move();
var Car = (function () {
    function Car() {
    }
    Car.prototype.run = function () { };
    return Car;
}());
var car = new Car();
car.run();
var Book = (function () {
    function Book() {
    }
    Book.prototype.getName = function () { };
    Book.prototype.callGetName = function () { };
    return Book;
}());
var book = new Book();
book.callGetName();
var Person = (function () {
    function Person() {
    }
    Person.prototype.getName = function () { };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.init = function () {
        this.getName();
    };
    return Student;
}(Person));
var person = new Person();
var student = new Student();
student.init();
//# sourceMappingURL=8-类.js.map