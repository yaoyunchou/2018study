/**
 * 学习类的常规方法
 * get
 * set
 * 
 * 只有get没有对应的set的属性会自动默认为readOnly
 * 
 * 
 * 抽象类
 */
let passCode = 'yao'

 class Car {
     private _fullName:string
     constructor(name:string){
        this._fullName = name;
     }
     get fullName():string{
        return this._fullName;
     }

     set fullName(newName:string){
        if(passCode&&passCode==='yao'){
            this._fullName = newName;
        }else{
            console.error('Unauthoried update of car');
        }
     }
     move(){
        console.log(`你是的名字是${this._fullName}`);
     }
 }

 class  Truck extends Car{
     constructor(name:string){
         super(name)
        
     }
 }


 let truck:Car = new Truck('东风一气大卡车！');
 truck.move();
 truck.fullName = 'yun';
 truck.move();