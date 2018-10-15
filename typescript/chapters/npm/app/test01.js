"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = __importDefault(require("log4js"));
// 配置规则
/**
 * 第一种：
 * configure方法为配置log4js对象，内部有levels、appenders、categories三个属性
 * levels:
 *         配置日志的输出级别,共ALL<TRACE<DEBUG<INFO<WARN<ERROR<FATAL<MARK<OFF八个级别,default level is OFF
 *         只有大于等于日志配置级别的信息才能输出出来，可以通过category来有效的控制日志输出级别
 * appenders:
 *         配置文件的输出源，一般日志输出type共有console、file、dateFile三种
 *         console:普通的控制台输出
 *         file:输出到文件内，以文件名-文件大小-备份文件个数的形式rolling生成文件
 *         dateFile:输出到文件内，以pattern属性的时间格式，以时间的生成文件
 * replaceConsole:
 *         是否替换控制台输出，当代码出现console.log，表示以日志type=console的形式输出
 *
 */
log4js_1.default.configure({
    appenders: {
        cheese: {
            type: 'dateFile',
            filename: './logs/wechat',
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true,
            category: 'dateFileLog',
            backup: 3,
        },
        out: {
            type: 'console'
        },
    },
    categories: {
        default: {
            appenders: ['out', 'cheese'],
            level: 'info'
        }
    }
});
var logger = log4js_1.default.getLogger('test');
logger.info('Time:', new Date());
exports.default = {
    log4js: log4js_1.default,
    logger
};
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdDAxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rlc3QwMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUM1QixPQUFPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxnQkFBTSxDQUFDLFNBQVMsQ0FBQztJQUNiLFNBQVMsRUFBRTtRQUNQLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxVQUFVO1lBQ2hCLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQixRQUFRLEVBQUUsYUFBYTtZQUN2QixNQUFNLEVBQUUsQ0FBQztTQUNaO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsSUFBSSxFQUFFLFNBQVM7U0FDbEI7S0FDSjtJQUNELFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7WUFDNUIsS0FBSyxFQUFFLE1BQU07U0FDaEI7S0FDSjtDQUNKLENBQUMsQ0FBQztBQUNILElBQUksTUFBTSxHQUFHLGdCQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztBQUVqQyxrQkFBZTtJQUNYLE1BQU0sRUFBTixnQkFBTTtJQUNOLE1BQU07Q0FDVCxDQUFDO0FBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUN2QyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDIn0=