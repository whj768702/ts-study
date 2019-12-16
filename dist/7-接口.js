"use strict";
var getUserName = function (user) {
    return user.name;
};
function CalculateAreas(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
var mySquare = CalculateAreas({ widdth: 5 });
var mySquare2 = CalculateAreas({ widdth: 5 });
function CalculateAreas2(config) {
    var square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return { area: square };
}
var mySquare3 = CalculateAreas2({ widdth: 5 });
var xiaoMing = {
    name: 'xiaoMing',
    isMale: false,
    say: function () { return 'text'; },
    phone: {
        qq: '123',
        sina: '456'
    }
};
//# sourceMappingURL=7-接口.js.map