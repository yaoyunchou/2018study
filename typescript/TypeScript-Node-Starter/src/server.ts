import errorHandler from "errorhandler";
import { getMiddleLogger } from "./util/getLogger";
import log4js from "log4js";
import app from "./app";


/**
 * Error Handler. Provides full stack - remove for production
 */

app.use(errorHandler());
// app.use(getMiddleLogger(log4js.getLogger("http"), { level: "auto" }));
/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
