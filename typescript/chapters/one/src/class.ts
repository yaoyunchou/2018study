/**
 * 学习类的常规方法
 * 
 * public
 * private
 * protected
 * readonly
 */

 class Animals {
     private name:string
     protected age:number
     constructor(name:string,age:number){
        this.name = name;
        this.age = age;
     }
     move(){
        console.log(`你是的名字是${this.name},今年${this.age}岁`);
     }
 }

 class Dog extends Animals{
     constructor(name:string){
         super(name,5)
        
     }
     speak(){
         //console.log(`my name is ${this.name}`)//属性“name”为私有属性，只能在类“Animals”中访问
         console.log(`my age is ${this.age}`)
     }

 }


 let dog:Dog = new Dog('二哈')
 dog.move();
 dog.speak();