const color = require("../util/colors.js");
const style = require("../util/styles.js");

/**
 * @typedef {{ [key: string]: string }} StyleMap
 */

/**
 * Retorna os códigos ANSI com base nos estilos especificados.
 * @param {string} stylesStr
 * @param {StyleMap} allStyles
 * @returns {string}
 */
function getStyleCodes(stylesStr, allStyles) {
  return stylesStr
    .split(".")
    .map(s => allStyles[s.trim()])
    .filter(Boolean)
    .join("");
}

/**
 * Faz o parsing e aplica estilos ANSI ao texto.
 * Suporta estrutura: {style1.style2 Texto}
 * @param {string} text
 * @returns {string}
 */
function parser(text) {
  text = text.replace(/\\\{/g, "__OPEN_BRACE__").replace(/\\\}/g, "__CLOSE_BRACE__");

  const allStyles = { ...color, ...style };
  const templateRegex = /\{([^{}]+)\}/g;

  /**
   * @param {string} _
   * @param {string} stylesStr
   * @returns {string}
   */
  function applyStyles(_, stylesStr) {
    const spaceIndex = stylesStr.indexOf(" ");
    if (spaceIndex === -1) return "";

    const styleNames = stylesStr.slice(0, spaceIndex);
    const content = stylesStr.slice(spaceIndex + 1);

    const styledContent = parser(content);
    const codes = getStyleCodes(styleNames, allStyles);

    return codes ? codes + styledContent + style.reset : styledContent;
  }

  let result = text.replace(templateRegex, applyStyles);
  return result.replace(/__OPEN_BRACE__/g, "{").replace(/__CLOSE_BRACE__/g, "}");
}

module.exports = parser;