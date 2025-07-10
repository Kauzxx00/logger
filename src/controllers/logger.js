const icon = require("../util/icons.js");
const parser = require("./parser.js");

/**
 * @typedef {Object} Logger
 * @property {(text: string, disableIcon?: boolean) => void} warn
 * @property {(text: string, disableIcon?: boolean) => void} error
 * @property {(text: string, disableIcon?: boolean) => void} success
 * @property {(text: string, disableIcon?: boolean) => void} info
 * @property {(text: string, disableIcon?: boolean) => void} debug
 * @property {(text: string) => void} style
 * @property {(text: string) => string} format
 */

/** @type {Logger} */
const logger = {
  warn(text, disableIcon = false) {
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