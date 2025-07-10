const color = require("../util/colors.js");
const style = require("../util/styles.js");

/**
 * Parses a styled template string and returns ANSI-coded text.
 * @param {string} text
 * @returns {string}
 */
function parser(text) {
  const allStyles = { ...color, ...style };
  const templateRegex = /\{([^{}]+)\}/g;

  /**
   * @param {string} _
   * @param {string} stylesStr
   */
  function applyStyles(_, stylesStr) {
    const spaceIndex = stylesStr.indexOf(" ");
    if (spaceIndex === -1) return "";

    const styleNames = stylesStr.slice(0, spaceIndex).split(".");
    const content = stylesStr.slice(spaceIndex + 1);

    const styledContent = parser(content);

    const styleCodes = styleNames
      .map(s => allStyles[s.trim()] || "")
      .filter(Boolean);

    return styleCodes.length > 0
      ? styleCodes.join("") + styledContent + style.reset
      : styledContent;
  }

  return text.replace(templateRegex, applyStyles);
}

module.exports = parser;