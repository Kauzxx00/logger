const icon = require("../util/icons.js");
const parser = require("./parser.js");

const logger = {
  warn(text) {
    console.log(parser(`{yellow ${icon.warn} ${text}}`));
  },
  error(text) {
    console.log(parser(`{red ${icon.error} ${text}}`));
  },
  success(text) {
    console.log(parser(`{green ${icon.success} ${text}}`));
  },
  info(text) {
    console.log(parser(`{white ${icon.info} ${text}}`));
  },
  debug(text) {
    console.log(parser(`{cyan ${icon.debug} ${text}}`));
  },

  style(text) {
    console.log(parser(text));
  },
  format(text) {
    return parser(text);
  }
};

module.exports = logger;