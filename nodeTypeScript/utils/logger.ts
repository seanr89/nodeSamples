
import winston from "winston";
import { createLogger } from "winston";
import * as options from "../config/loggerConfig";

const logger = createLogger({
    exitOnError: false, // do not exit on handled exceptions,
    transports: [
        new (winston.transports.Console)(options.default.console),
        new (winston.transports.File)(options.default.file),
    ],
  });

if (process.env.NODE_ENV !== "production") {
    logger.debug("Logging initialized at debug level");
}

export default logger;
