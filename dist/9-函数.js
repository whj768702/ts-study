"use strict";
var add = function (a, b) { return a + (b ? b : 0); };
var add2 = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
var add3 = function (a) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return rest.reduce((function (a, b) { return a + b; }), a);
};
function assigned(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
assigned(1);
assigned(1, 2);
assigned(1, 2, 3, 4);
//# sourceMappingURL=9-函数.js.map