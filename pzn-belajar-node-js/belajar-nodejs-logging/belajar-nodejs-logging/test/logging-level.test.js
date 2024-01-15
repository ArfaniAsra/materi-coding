import winston from "winston";

test("create new logger with transports", () => {
  const logger = winston.createLogger({
    level: "silly", // Tentukan sampai level terendah apa yang akan ditampilkan
    transports: [new winston.transports.Console({})],
  });

  // Defaultnya cuma 3 teratas yang ditampilkan
  logger.log({level: "error", message: "Hello Error"});
  logger.log({level: "warn", message: "Hello Warn"});
  logger.log({level: "info", message: "Hello Info"});
  logger.log({level: "http", message: "Hello HTTP"});
  logger.log({level: "verbose", message: "Hello Verbose"});
  logger.log({level: "debug", message: "Hello Debug"});
  logger.log({level: "silly", message: "Hello Silly"});
});

test("logging with shortcut function", () => {
  const logger = winston.createLogger({
    level: "debug",
    transports: [new winston.transports.Console({})],
  });

  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello Info");
  logger.http("Hello HTTP");
  logger.verbose("Hello Verbose");
  logger.debug("Hello Debug");
  logger.silly("Hello Silly");

});