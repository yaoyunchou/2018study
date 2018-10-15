// import winston from "winston";
// import { Logger } from "winston";
// import { ENVIRONMENT } from "./secrets";

// const logger = new (Logger)({
//     transports: [
//         new (winston.transports.Console)({ level: process.env.NODE_ENV === "production" ? "error" : "debug" }),
//         new (winston.transports.File)({ filename: "debug.log", level: "debug"})
//     ]
// });

// if (process.env.NODE_ENV !== "production") {
//     logger.debug("Logging initialized at debug level");
// }
// import { configure, getLogger } from './log4js';
// configure('./filename');
// const logger = getLogger();
// logger.level = 'debug';
// logger.debug("Some debug messages");

// configure({
//     appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
//     categories: { default: { appenders: ['cheese'], level: 'error' } }
// });
export default logger;

