const icon = require("../util/icons.js");
const { parser, setCustomColors } = require("./parser.js");

/**
 * Formata os argumentos fornecidos em uma única string.
 *
 * @param {any[]} args - Lista de valores a serem formatados.
 * @returns {string} Texto formatado, com objetos escapando `{}`.
 */
function formatArgs(args) {
  return args.map(arg => {
    if (typeof arg === "string") {
      return arg; // não toca na string, deixa o parser aplicar os estilos
    }

    // Se for objeto ou outro tipo, transforma em string segura e escapa chaves
    const text = JSON.stringify(arg, null, 0);
    return text.replace(/\{/g, "\\{").replace(/\}/g, "\\}");
  }).join(" ");
}

/**
 * Função de log com suporte a ícone e múltiplos argumentos.
 * @callback LoggerMethod
 * @param {...any} args - Valores a serem exibidos. Se o primeiro argumento for `boolean`, ele é interpretado como `disableIcon`.
 * @returns {void}
 */

/**
 * Função de log personalizada sem ícone, apenas com formatação.
 * @callback LoggerSimpleMethod
 * @param {...any} args - Argumentos a serem formatados e exibidos.
 * @returns {void}
 */

/**
 * Função que retorna a string formatada com ANSI, sem imprimir.
 * @callback LoggerFormatMethod
 * @param {any} args - Argumentos a serem formatados.
 * @returns {string}
 */

/**
 * Define cores personalizadas que podem ser utilizadas nos estilos.
 * @callback LoggerSetColor
 * @param {{ [name: string]: string }} colors - Mapa de cores em hexadecimal (ex: `{ azulEscuro: "#111122" }`)
 * @returns {void}
 */

/**
 * Objeto com métodos de logging estilizados.
 * @typedef {Object} Logger
 * @property {LoggerMethod} warn - Mensagem amarela com ícone ⚠
 * @property {LoggerMethod} error - Mensagem vermelha com ícone ✖
 * @property {LoggerMethod} success - Mensagem verde com ícone ✔
 * @property {LoggerMethod} info - Mensagem branca com ícone ℹ
 * @property {LoggerMethod} debug - Mensagem ciano com ícone ⚙
 * @property {LoggerSimpleMethod} style - Aplica estilos com o parser, sem ícone
 * @property {LoggerSimpleMethod} custom - Mesmo que `style`, apenas outro nome
 * @property {LoggerFormatMethod} format - Retorna uma string formatada com ANSI
 * @property {LoggerSetColor} setColor - Define novas cores personalizadas
 */

/** @type {Logger} */
const logger = {
  warn(disableIcon, ...args) {
    if (typeof disableIcon !== "boolean") {
      args.unshift(disableIcon);
      disableIcon = false;
    }
    console.log(parser(`{yellow ${disableIcon ? "" : icon.warn + " "}${formatArgs(args)}}`));
  },
  error(disableIcon, ...args) {
    if (typeof disableIcon !== "boolean") {
      args.unshift(disableIcon);
      disableIcon = false;
    }
    console.log(parser(`{red ${disableIcon ? "" : icon.error + " "}${formatArgs(args)}}`));
  },
  success(disableIcon, ...args) {
    if (typeof disableIcon !== "boolean") {
      args.unshift(disableIcon);
      disableIcon = false;
    }
    console.log(parser(`{green ${disableIcon ? "" : icon.success + " "}${formatArgs(args)}}`));
  },
  info(disableIcon, ...args) {
    if (typeof disableIcon !== "boolean") {
      args.unshift(disableIcon);
      disableIcon = false;
    }
    console.log(parser(`{white ${disableIcon ? "" : icon.info + " "}${formatArgs(args)}}`));
  },
  debug(disableIcon, ...args) {
    if (typeof disableIcon !== "boolean") {
      args.unshift(disableIcon);
      disableIcon = false;
    }
    console.log(parser(`{cyan ${disableIcon ? "" : icon.debug + " "}${formatArgs(args)}}`));
  },
  style(...args) {
    console.log(parser(formatArgs(args)));
  },
  custom(...args) {
    console.log(parser(formatArgs(args)));
  },
  format(args) {
    args = typeof args !== "string" ? JSON.stringify(args) : args;
    return args.replace(/\{/g, "\\{").replace(/\}/g, "\\}");
  },
  setColor(colors) {
    setCustomColors(colors);
  }
};

module.exports = logger;