# 🌈 Logger

**An enhanced logging utility** for Node.js with vibrant colors, intuitive icons, and powerful formatting capabilities.

## 📦 Installation

```bash
npm install @kauzx/logger
```

## ✨ Features Highlight

- � **Colorful Output**: Vibrant terminal colors for better visibility
- 🏷 **Log Levels**: info, warn, error, success, debug
- ✏ **Advanced Templating**: Dynamic text styling with simple syntax
- 🔣 **Visual Indicators**: Distinct icons for each log type
- 🎛 **Style Combinations**: Mix bold, italic, underline, and more
- 📝 **Formatted Strings**: Clean, structured output formatting

## 🚀 Quick Start

```javascript
const { logger, icon } = require('@kauzx/logger');

// Basic logging
logger.info("Service initialized");
logger.warn("Storage 80% full");
logger.error("Failed to connect");

// No icon
logger.success("Payment processed", true);
logger.debug("Session ID: abc123", true);

// Advanced styling
logger.style(`{bold.cyan ${icon.checkCircle} Important:} {underline Update} {bgRed.white required}`);
```

## 🎨 Styling Guide

Format text using intuitive template syntax:
`{style1.style2 your text here}`

### 🖍 Style Examples:
- `{red Critical error!}`
- `{bold.underline.magenta Warning}`
- `{bgCyan.black Debug info}`

### 🎨 Available Styles:

> **Text Colors:**
> `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`

> **Text Styles:**
> `bold`, `italic`, `underline`, `blink`, `inverse`

> **Background Colors:**
> `bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`

## 🔣 Default Icons

| Log Level | Icon | Color    |
|-----------|------|----------|
| info      | ℹ    | Blue     |
| warn      | ⚠    | Yellow   |
| error     | ✖    | Red      |
| success   | ✔    | Green    |
| debug     | ⚙    | Magenta  |