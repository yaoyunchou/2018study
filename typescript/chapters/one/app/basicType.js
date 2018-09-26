"use strict";
//定义常规类型的
//boolean
let isDone = false;
//string
let str = 'yao';
let str1 = `yun`;
//number
let number1 = 1;
//拼接字符串
//list   列表
let list = [1, 2, 3];
let list1 = [4, 5, 6];
//元祖 Tuple
let x = ['yao', 10];
//枚举
var Color;
(function (Color) {
    Color[Color["red"] = 10] = "red";
    Color[Color["pink"] = 11] = "pink";
})(Color || (Color = {}));
let c = Color.red;
//# sourceMappingURL=basicType.js.map