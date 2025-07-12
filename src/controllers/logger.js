const icon = require("../util/icons.js");
const parser = require("./parser.js");

/**
 * @typedef {(text: string, disableIcon?: boolean) => void} LoggerMethod
 * @typedef {(text: string) => void} LoggerSimpleMethod
 * @typedef {(text: string) => string} LoggerFormatMethod
 *
 * @typedef {Object} Logger
 * @property {LoggerMethod} warn
 * @property {LoggerMethod} error
 * @property {LoggerMethod} success
 * @property {LoggerMethod} info
 * @property {LoggerMethod} debug
 * @property {LoggerSimpleMethod} style
 * @property {LoggerFormatMethod} format
 */

/** @type {Logger} */
const logger = {
  warn(text , disableIcon = false) {
    console.log(parser(`{yellow ${disableIcon ? "" : icon.warn + " "}${text}}`));
  },
  error(text, disableIcon = false) {
    console.log(parser(`{red ${disableIcon ? "" : icon.error + " "}${text}}`));
  },
  success(text, disableIcon = false) {
    console.log(parser(`{green ${disableIcon ? "" : icon.success + " "}${text}}`));
  },
  info(text, disableIcon = false) {
    console.log(parser(`{white ${disableIcon ? "" : icon.info + " "}${text}}`));
  },
  debug(text, disableIcon = false) {
    console.log(parser(`{cyan ${disableIcon ? "" : icon.debug + " "}${text}}`));
  },
  style(text) {
    console.log(parser(text));
  },
  format(text) {
    return parser(text);
  }
};

module.exports = logger;