/**
 * 1.学习渐变的规律
 * 2.优化学习布局
 */

//引入对应的包
import $ from 'jquery'

function getDeg(deg:number){
    return deg*Math.PI/180;
}
/**
 * 画一个星星
 */
class Dray{
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
    drayStar(point:{x:number,y:number},r1:number,r2:number,rotate:number=0){
        // 状态设置
        this.ctx.beginPath();
        this.ctx.moveTo(point.x+r2* Math.cos(getDeg(18+rotate)),point.y-r2*Math.sin(getDeg(18+rotate)));
        for(let i =0; i<5;i++){
            this.ctx.lineTo(point.x+r2* Math.cos(getDeg(18+i*72+rotate)),point.y-r2*Math.sin(getDeg(18+i*72+rotate)));
            this.ctx.lineTo(point.x+r1* Math.cos(getDeg(54+i*72+rotate)),point.y-r1*Math.sin(getDeg(54+i*72+rotate)));
        }
        this.ctx.closePath();
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

        let  linearGrad = this.ctx.createLinearGradient(0,0,0,this.ctx.canvas.height);
        linearGrad.addColorStop(0.0,'black');
        linearGrad.addColorStop(1.0,'blue');
        this.ctx.fillStyle = linearGrad;
        this.ctx.fill();
    }
    drayStarSky(){
        this.drayBg();
        for(let i = 0; i<100; i++){
            let pointX = Math.random()*this.ctx.canvas.width;
            let pointY = Math.random()*this.ctx.canvas.height*0.6;
            let r1 = Math.random()*5+5;
            let r2 = r1/2;
            let rotate = Math.random()*360;
            this.drayStar({x:pointX, y:pointY},r1,r2,rotate)
        }
    }
    /**
     * 绘制线性渐变
     */
    drayLinearGrad(){
        //创建第一个点到第二个点连线方向的渐变 这里是（0，0）点到（0，800）上的一个y轴垂直渐变   可以超出画布范围进行设置                   
        let linearGrad = this.ctx.createLinearGradient(0,0,0,800);
        //添加渐变过程中的颜色，过程从0-1，类似于css3的动画过程
        linearGrad.addColorStop(0.0,'black');
        linearGrad.addColorStop(1.0,'blue');

        //设置fillStyle的属性
        this.ctx.fillStyle = linearGrad;

        //绘制
        this.ctx.fillRect(0,0,400,400)
    }
    // 绘制径向渐变
    drayRadialGrad(){
        let radialGrad = this.ctx.createRadialGradient(600,200,150,600,200,180);
        radialGrad.addColorStop(0.0,'#ff8200');
        radialGrad.addColorStop(1.0,'black');

        this.ctx.fillStyle = radialGrad;
        this.ctx.fillRect(400,0,400,400);
    }
    //绘制文字
    drayText(){
       this.ctx.font = '50px 微软雅黑';
       let radialGrad = this.ctx.createRadialGradient(200,600,0,200,600,200);
       radialGrad.addColorStop(0.0,'blue');
       radialGrad.addColorStop(1.0,'#ff8200');
       this.ctx.strokeStyle = radialGrad;
       this.ctx.strokeText('www.royole.com',0,500);
    }
    //绘制曲线
    drayCurve(){
        this.ctx.beginPath()
        this.ctx.moveTo(600,600);
        this.ctx.arcTo(600,600,700,700,90);
        // this.ctx.arcTo(600,600,500,500,80);
        this.ctx.closePath();
        this.ctx.lineWidth = 6;
        this.ctx.strokeStyle ='red';
        
        this.ctx.stroke();
    }

    /**
     * 绘制星空的时候如何使星星不重叠，不出现超出画布的现象
     * 
     * TODO 星星不重叠还未实现 是否可以使用isPointInPath  进行实现
     * @return {boolean}
     */
    isOutCanvas(point:{x:number,y:number},r1:number){
        return point.x-r1&&point.y-r1;
    }
    //绘制
    dray(){
        this.drayLinearGrad();
        this.drayRadialGrad();
        this.drayText();
        this.drayCurve()
    }
}


// 页面加载完成后再获取
$(function(){
    // 获取canvas对象
    let canvas:any = $('.myCanvas')[0];
    let ctx = canvas.getContext('2d')
    new  Dray(ctx).dray();
})