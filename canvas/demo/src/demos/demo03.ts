/**
 * 引入对应的包
 */
import $ from 'jquery'

function getDeg(deg:number){
    return deg*Math.PI/180;
}
/**
 * 画一个星星
 */
class DrayRect{
    private ctx:any
    private r1:number
    private r2:number
    private point :{x:number,y:number}
    constructor(ctx:object,point:{x:number,y:number},r1:number,r2:number){
      this.ctx = ctx;  
      this.point = point;
      this.r1 = r1;
      this.r2 = r2;
    }
    /**
     * 这个方法是比较常规的实现方法，但是这个方法的问题在于我们画出啊了的有 lineWidth的矩形不是闭合的
     */
    dray(){
        // 状态设置
        this.ctx.beginPath();
        this.ctx.moveTo(this.point.x+this.r2* Math.cos(getDeg(18)),this.point.y-this.r2*Math.sin(getDeg(18)));
        this.ctx.lineTo(this.point.x+this.r1* Math.cos(getDeg(54)),this.point.y-this.r1*Math.sin(getDeg(54)));
        this.ctx.lineTo(this.point.x+this.r2* Math.cos(getDeg(90)),this.point.y-this.r2*Math.sin(getDeg(90)));
        this.ctx.lineTo(this.point.x+this.r1* Math.cos(getDeg(126)),this.point.y-this.r1*Math.sin(getDeg(126)));
        this.ctx.lineTo(this.point.x+this.r2* Math.cos(getDeg(162)),this.point.y-this.r2*Math.sin(getDeg(162)));
        this.ctx.lineTo(this.point.x+this.r1* Math.cos(getDeg(198)),this.point.y-this.r1*Math.sin(getDeg(198)));
        this.ctx.lineTo(this.point.x+this.r2* Math.cos(getDeg(234)),this.point.y-this.r2*Math.sin(getDeg(236)));
        this.ctx.lineTo(this.point.x+this.r1* Math.cos(getDeg(270)),this.point.y-this.r1*Math.sin(getDeg(270)));
        this.ctx.lineTo(this.point.x+this.r2* Math.cos(getDeg(306)),this.point.y-this.r2*Math.sin(getDeg(306)));
        this.ctx.lineTo(this.point.x+this.r1* Math.cos(getDeg(342)),this.point.y-this.r1*Math.sin(getDeg(342)));

        this.ctx.closePath();

        this.ctx.lineJoin = 'bevel';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#ff8200";

         
        //绘制
        this.ctx.stroke();
    }
  
    

}

//

// 页面加载完成后再获取
$(function(){
    // 获取canvas对象
    let canvas:any = $('.myCanvas')[0];
    let ctx = canvas.getContext('2d')
    new  DrayRect(ctx,{x:400,y:400},100,200).dray();
   
    console.log('jquery加载完成-----'+$);
})