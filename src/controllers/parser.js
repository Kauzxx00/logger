const color = require("../util/colors.js");
const style = require("../util/styles.js");

/** @type {{ [key: string]: string }} */
const customColors = {};

/**
 * Permite definir cores personalizadas em runtime.
 * @param {{ [key: string]: string }} newColors - Mapa de cores com nome e valor hexadecimal.
 */
function setCustomColors(newColors) {
  for (const key in newColors) {
    const hex = newColors[key];
    customColors[key] = `\x1b[38;2;${hexToRGB(hex).join(";")}m`;
  }
}

/**
 * Converte um valor hexadecimal para RGB.
 * @param {string} hex - Cor hexadecimal (ex: #ff0000).
 * @returns {[number, number, number]} Valor RGB.
 */
function hexToRGB(hex) {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return [r, g, b];
}

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
  text = text.replace(/\/\{/g, "__OPEN_BRACE__").replace(/\/\}/g, "__CLOSE_BRACE__");

  const templateRegex = /\{([^{}]+)\}/g;

  /**
   * Aplica os estilos definidos ao conteúdo da tag.
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
    const allStyles = { ...color, ...style, ...customColors };
    const codes = getStyleCodes(styleNames, allStyles);
    
    return codes ? codes + styledContent + style.reset : styledContent;
  }

  let result = text.replace(templateRegex, applyStyles);
  return result.replace(/__OPEN_BRACE__/g, "{").replace(/__CLOSE_BRACE__/g, "}");
}

module.exports = { parser, setCustomColors };