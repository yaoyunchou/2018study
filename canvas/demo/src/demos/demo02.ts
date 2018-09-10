/**
 * 引入对应的包
 */
import $ from 'jquery'
/**
 * 画一个矩形的方法，
 */
class DrayRect{
    private ctx:any
    private width:number
    private height:number
    private point :{x:number,y:number}
    constructor(ctx:object,point:{x:number,y:number},width:number,height:number){
      this.ctx = ctx;  
      this.point = point;
      this.width = width;
      this.height = height;
    }
    /**
     * 这个方法是比较常规的实现方法，但是这个方法的问题在于我们画出啊了的有 lineWidth的矩形不是闭合的
     */
    dray(){
        // 状态设置
        this.ctx.moveTo(this.point.x,this.point.y);
        this.ctx.lineTo(this.point.x+this.width,this.point.y);
        this.ctx.lineTo(this.point.x+this.width,this.point.y+this.height);
        this.ctx.lineTo(this.point.x,this.point.y+this.height);
        this.ctx.lineTo(this.point.x,this.point.y); 
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#ff8200";

        //绘制
        this.ctx.stroke();
    }
    /**
     * 绘制闭合图形的两个比较好用的方法
     * 
     * content.closePath()
     * content.beginPath() beginPath() 丢弃任何当前定义的路径并且开始一条新的路径。它把当前的点设置为 (0,0)。
     */
    dray2(){
        this.ctx.moveTo(this.point.x,this.point.y);
        this.ctx.lineTo(this.point.x+this.width,this.point.y);
        this.ctx.lineTo(this.point.x+this.width,this.point.y+this.height);
        this.ctx.lineTo(this.point.x,this.point.y+this.height);
        this.ctx.closePath();
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
    new  DrayRect(ctx,{x:100,y:100},300,100).dray();
    new  DrayRect(ctx,{x:100,y:400},300,100).dray2();
    console.log('jquery加载完成-----'+$);
})