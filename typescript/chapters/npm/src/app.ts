import  Koa from 'koa';
const app:Koa = new Koa();

//
app.use((ctx,next) =>{
    let start = new Date;
    let ms = Number(new Date) - Number(start);
    console.log('%s %s - %s', ctx.method, ctx.url, ms)
    next();
});

app.use((ctx,next)=> {
    ctx.body = 'Hello World';
    next();
});

app.listen(8040);