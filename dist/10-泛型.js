"use strict";
function returnItem(para) {
    return para;
}
returnItem('aa');
returnItem(10);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([1, 'one']);
function getArrayLength(arg) {
    return arg.length;
}
getArrayLength([1, 1, 2, 3,]);
var returnItem2 = function (para) { return para; };
var Stack = (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        return this.arr.pop();
    };
    return Stack;
}());
var stack = new Stack();
stack.push(1);
console.log(stack.pop());
//# sourceMappingURL=10-泛型.js.map