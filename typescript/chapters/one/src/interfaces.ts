/**
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。
 */

// 初体验下接口
 interface LabelledValue{
     label:string;
 }

 function printLabel(labelledValue:LabelledValue){
     console.log(labelledValue.label);
 }

 printLabel({label:'公司简介'})
 

//额外的属性检测=================================

interface SquareConfig{
    color?:string;
    width?:number
}
/**
 * @param {SquareConfig} config 
 */
function createSquare(config:SquareConfig){
    console.log(config);
}

/**这TypeScript会认为这段代码可能存在bug。 对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。
 *如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
 *打开注释会出现错误，但是参数都是选填的
 */
//createSquare({name:'red',width:100});  


// 解决方法如下


interface Animal{
    name?:string;
    age?:number;
    [propNmae:string]:any
}

function say(animal:Animal){
    console.log(animal);
}
//这个时候就不会报错了
say({name:'cat',leg:4})


// 函数类型==========================

interface SearchFunc{
    (source:string,subString:string):boolean;
}

let mySearch :SearchFunc;
mySearch = function(source:string,subString:string){
    let result  = source.search(subString);
    return result>-1;
}

// 实现接口    =========


//静态部分和实例部分

