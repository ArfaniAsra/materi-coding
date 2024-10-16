import winston from "winston";

test("create new logger with transports", () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "info",
    message: "Hello Logger",
  });
});