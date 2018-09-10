/**
 * 引入对应的包
 */
import $ from 'jquery'
/**
 * 
 */
export class DrayStar{
    private ctx:any
    constructor(ctx:object){
      this.ctx = ctx;  
    }
    dray(){
        this.ctx.moveTo(100,100);
        this.ctx.lineTo(700,700);
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#ff8200";
        this.ctx.stroke();
    }

}

//

// 页面加载完成后再获取
$(function(){
    // 获取canvas对象
    let canvas:any = $('.myCanvas')[0];
    let ctx = canvas.getContext('2d')
    new  DrayStar(ctx).dray();
    console.log('jquery加载完成-----'+$);
})