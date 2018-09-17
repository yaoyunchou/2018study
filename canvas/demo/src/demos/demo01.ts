/**
 * 引入对应的包
 */
import $ from 'jquery'
/**
 * 
 */
function getDeg(deg:number){
    return deg*Math.PI/180;
}
export class DrayStar{
    private ctx:any
    constructor(ctx:object){
      this.ctx = ctx;  
    }
    //画一条直线
    dray(){
        this.ctx.moveTo(0,0);
        this.ctx.lineTo(400,400);
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#ff8200";
        this.ctx.stroke();
    }
    // 画一个星星
    drayStar(point:{x:number,y:number},r:number,rotate:number){


        this.ctx.beginPath();
        this.ctx.moveTo(point.x+r*Math.cos(getDeg(18+rotate)),point.y-r*Math.sin(getDeg(18+rotate)))
        for(let i= 0; i < 5; i++){
            this.ctx.lineTo(point.x+r*Math.cos(getDeg(18+rotate+72*i)),point.y-r*Math.sin(getDeg(18+rotate+72*i)))
            this.ctx.lineTo(point.x+r*Math.cos(getDeg(54+rotate+72*i))/2,point.y-r*Math.sin(getDeg(54+rotate+72*i))/2)
        }

        this.ctx.closePath();
        this.ctx.shadowColor = 'black';
        this.ctx.shadowBlur = 10;
        this.ctx.shadowOffsetX = 10;
        this.ctx.shadowOffsetY = 10;
        this.ctx.fillStyle = "#ff8200";
        this.ctx.fill();
    }

}

//

// 页面加载完成后再获取
$(function(){
    // 获取canvas对象
    let canvas:any = $('.myCanvas')[0];
    let ctx = canvas.getContext('2d')
    var dray = new  DrayStar(ctx);
    dray.dray();
    dray.drayStar({x:600,y:200},200,0);
    console.log('jquery加载完成-----'+$);
})