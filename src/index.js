const logger = require("./controllers/logger.js");
const color = require("./util/colors.js");
const style = require("./util/styles.js");
const icon = require("./util/icons.js");

/**
 * @typedef {import("./controllers/logger.js")} Logger
 */

/**
 * @type {{
 *   logger: Logger,
 *   color: { [key: string]: string },
 *   style: { [key: string]: string },
 *   icon: { [key: string]: string }
 * }}
 */
const exported = { logger, color, style, icon };

module.exports = exported;