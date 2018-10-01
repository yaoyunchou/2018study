"use strict";
/**
 * 学习类的常规方法
 */
class Animals {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`你是的名字是${this.name}`);
    }
}
class Dog extends Animals {
    constructor(name) {
        super(name);
    }
}
let dog = new Dog('二哈');
dog.move();
//# sourceMappingURL=class.js.map