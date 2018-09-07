
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