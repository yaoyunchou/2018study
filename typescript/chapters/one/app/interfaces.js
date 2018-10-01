"use strict";
/**
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。
 */
function printLabel(labelledValue) {
    console.log(labelledValue.label);
}
printLabel({ label: '公司简介' });
/**
 * @param {SquareConfig} config
 */
function createSquare(config) {
    console.log(config);
}
function say(animal) {
    console.log(animal);
}
//这个时候就不会报错了
say({ name: 'cat', leg: 4 });
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
// 实现接口    =========
//静态部分和实例部分
//# sourceMappingURL=interfaces.js.map