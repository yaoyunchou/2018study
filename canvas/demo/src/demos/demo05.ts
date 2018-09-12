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
    constructor(ctx:object,){
      this.ctx = ctx;  
    }
   //学习填充渐变
    dray(){
        let linearGrad = this.ctx.createLinearGradient(0,0,800,800);
        linearGrad.addColorStop(0.0,'#fff');
        linearGrad.addColorStop(1.0,'#000');
        this.ctx.fillStyle = linearGrad;
        this.ctx.fillRect(0,0,800,800);
    }
  
}

// 页面加载完成后再获取
$(function(){
    // 获取canvas对象
    let canvas:any = $('.myCanvas')[0];
    let ctx = canvas.getContext('2d')
    new  DrayRect(ctx).dray();
})