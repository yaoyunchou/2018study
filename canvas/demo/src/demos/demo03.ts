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
    /**
     * 
     *  这个方法是比较常规的实现方法，但是这个方法的问题在于我们画出啊了的有 lineWidth的矩形不是闭合的
     * @param point 
     * @param r1 
     * @param r2 
     * @param rotate 
     */
    dray(point:{x:number,y:number},r1:number,r2:number,rotate:number=0){
        // 状态设置
        this.ctx.beginPath();
        this.ctx.moveTo(point.x+r2* Math.cos(getDeg(18+rotate)),point.y-r2*Math.sin(getDeg(18+rotate)));
        for(let i =0; i<5;i++){
            this.ctx.lineTo(point.x+r2* Math.cos(getDeg(18+i*72+rotate)),point.y-r2*Math.sin(getDeg(18+i*72+rotate)));
            this.ctx.lineTo(point.x+r1* Math.cos(getDeg(54+i*72+rotate)),point.y-r1*Math.sin(getDeg(54+i*72+rotate)));
        }
        this.ctx.closePath();
       // this.ctx.lineJoin = 'bevel';
        //this.ctx.lineCap = 'round';
        //this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "#ff8200";
        

         
        //绘制
        //this.ctx.stroke();
        this.ctx.fillStyle = '#ff8200';
        this.ctx.fill();
    }
    drayBg(){
        this.ctx.beginPath();
        this.ctx.moveTo(0,0);
        this.ctx.lineTo(this.ctx.canvas.width,0);
        this.ctx.lineTo(this.ctx.canvas.width,this.ctx.canvas.height);
        this.ctx.lineTo(0,this.ctx.canvas.height);
        this.ctx.closePath();

       


       
        this.ctx.fillStyle = '#000000'
        this.ctx.fill();
    }
    drayStarSky(){
        this.drayBg();
        for(let i = 0; i<100; i++){
            let pointX = Math.random()*this.ctx.canvas.width;
            let pointY = Math.random()*this.ctx.canvas.height;
            let r1 = Math.random()*10+10;
            let r2 = r1-5;
            let rotate = Math.random()*360;
            this.dray({x:pointX, y:pointY},r1,r2,rotate)
        }
    }
    /**
     * @return {boolean}
     */
    isOutCanvas(point:{x:number,y:number},r1:number){
        return point.x-r1&&point.y-r1;
    }

}

//

// 页面加载完成后再获取
$(function(){
    // 获取canvas对象
    let canvas:any = $('.myCanvas')[0];
    let ctx = canvas.getContext('2d')
    new  DrayRect(ctx).drayStarSky();
})