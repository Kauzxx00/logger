const logger = require("./controllers/logger.js");
const color = require("./util/colors.js");
const style = require("./util/styles.js");
const icon = require("./util/icons.js");

function format(obj) {
    return JSON.stringify(obj).replace(/\{/g, "/{").replace(/\}/g, "/}");
}

/**
 * @module @kauzx/logger
 * @typedef {import('./controllers/logger.js').Logger} Logger
 * @typedef {typeof import('./util/colors.js')} Color
 * @typedef {typeof import('./util/styles.js')} Style
 * @typedef {typeof import('./util/icons.js')} Icon
 */

/** @type {{ logger: Logger, color: Color, style: Style, icon: Icon }} */
module.exports = { logger, color, style, icon, format };