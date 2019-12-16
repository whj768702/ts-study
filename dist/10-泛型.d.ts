declare function returnItem<T>(para: T): T;
declare function swap<T, U>(tuple: [T, U]): [U, T];
declare function getArrayLength<T>(arg: Array<T> | T[]): number;
interface ReturnItem<T> {
    (para: T): T;
}
declare const returnItem2: ReturnItem<number>;
declare class Stack<T> {
    private arr;
    push(item: T): void;
    pop(): void;
}
declare const stack: Stack<number>;
