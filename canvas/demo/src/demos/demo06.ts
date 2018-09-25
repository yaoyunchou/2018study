/**
 * 2018-09-19
 * 本小结主要测试圆弧的画法
 * 1.如何画圆弧
 * 2.如何画好曲线
 * 3.关于闭合回路的学习
 */
// 引入对应的包
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
     *  这个方法是比较常规的实现方法，但是这个方法的问题在于我们画出来了的有 lineWidth的矩形不是闭合的
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
            let r2 = r1/2;
            let rotate = Math.random()*360;
            this.dray({x:pointX, y:pointY},r1,r2,rotate)
        }
    }
    /**
     * 画一个圆形
     */
    drawAnArc(point:{x:number,y:number},r:number,rotate1:number,rotate2:number){
        this.ctx.beginPath();
        this.ctx.moveTo(200,0);
        this.ctx.lineTo(200,400);
        this.ctx.moveTo(0,200);
        this.ctx.lineTo(400,200);
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth =1;
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.beginPath();
        this.ctx.arc(point.x,point.y,r,rotate1,rotate2);
        this.ctx.strokeStyle = "black"; 
        this.ctx.stroke();
    }
    // 画一个带圆角的
    drawAnRectangle(point:{x:number,y:number},r:number,rotate1:number,rotate2:number){
        this.ctx.beginPath();
        this.ctx.moveTo(200,0);
        this.ctx.lineTo(200,400);
        this.ctx.moveTo(0,200);
        this.ctx.lineTo(400,200);
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth =1;
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.beginPath();
        this.ctx.arc(point.x,point.y,r,rotate1,rotate2);
        this.ctx.strokeStyle = "black"; 
        this.ctx.stroke();
    }
     // 画一个带圆角的
     drawArc(point:{x:number,y:number},width:number,height:number,r:number){
        /**
         * 曲线绘制的注意点是arcTo方法的两个点的确认，  
         */
        this.ctx.beginPath();
        this.ctx.moveTo(point.x,point.y);
        this.ctx.lineTo(point.x+r,point.y);
        this.ctx.arcTo(point.x+2*r,point.y,point.x+2*r,point.y+r,r);
        this.ctx.lineTo(point.x+2*r,point.y+2*r);

        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth =1;
        this.ctx.stroke();


        //尝试用圆弧画个蓝色类似的效果

        this.ctx.beginPath();
        this.ctx.moveTo(point.x+100,point.y+100)
        this.ctx.lineTo(point.x+100+r,point.y)
        this.ctx.arc(point.x+2*r,point.y,point.x+2*r,point.y+r,r);

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

    //展示画圆的动态工程
    let drawAnArc =  new  DrayRect(ctx);
    let drawAnArcStep = 0;
    let  timer = setInterval(()=>{
        if(drawAnArcStep <=103){
            drawAnArc.drawAnArc({x:200,y:200},100,0,drawAnArcStep/100*2*Math.PI);
        }else{
            drawAnArcStep = 0;
            ctx.clearRect(0,0, 400,400);
        }
        drawAnArcStep ++;
    },100);
    drawAnArc.drawArc({x:500,y:100},100,100,20);
})