declare const add: (a: number, b?: number | undefined) => number;
declare const add2: (a: number, b?: number) => number;
declare const add3: (a: number, ...rest: number[]) => number;
interface Direction {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
declare function assigned(all: number): Direction;
declare function assigned(topAndBottom: number, leftAndRight: number): Direction;
declare function assigned(top: number, right: number, bottom: number, left: number): Direction;
