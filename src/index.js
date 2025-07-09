const logger = require("./controllers/logger.js");
const color = require("./util/colors.js");
const style = require("./util/styles.js");

logger.warn("oi");
logger.error("oi");
logger.style("{yellow oi}")

module.exports = { logger, color, style };