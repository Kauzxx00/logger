const { logger, icon } = require("../src/index.js");

const text = logger.format("{red.bold Isto não será interpretado como estilo}");
logger.style(`{yellow ${text}}`);