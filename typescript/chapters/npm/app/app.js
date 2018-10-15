"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const app = new koa_1.default();
//
app.use((ctx, next) => {
    let start = new Date;
    let ms = Number(new Date) - Number(start);
    console.log('%s %s - %s', ctx.method, ctx.url, ms);
    next();
});
app.use((ctx, next) => {
    ctx.body = 'Hello World';
    next();
});
app.listen(3001);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUN2QixNQUFNLEdBQUcsR0FBTyxJQUFJLGFBQUcsRUFBRSxDQUFDO0FBRTFCLEVBQUU7QUFDRixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFO0lBQ2pCLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDO0lBQ3JCLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbEQsSUFBSSxFQUFFLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUU7SUFDaEIsR0FBRyxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDekIsSUFBSSxFQUFFLENBQUM7QUFDWCxDQUFDLENBQUMsQ0FBQztBQUVILEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMifQ==