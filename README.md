<h1 align="center">🌈 @kauzx/logger</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@kauzx/logger">
    <img src="https://img.shields.io/npm/v/@kauzx/logger.svg?style=flat&color=blue" />
  </a>
  <a href="https://www.npmjs.com/package/@kauzx/logger">
    <img src="https://img.shields.io/npm/dt/@kauzx/logger?style=flat&color=green" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/npm/l/@kauzx/logger?color=yellow" />
  </a>
</p>

**An enhanced logging utility** for Node.js with vibrant colors, intuitive icons, runtime custom colors, and powerful formatting — now supporting object-safe rendering, custom color themes, and nested styles.

---

## 📦 Installation

```bash
npm install @kauzx/logger
```

---

## ✨ Feature Highlights

* 🌈 **Colorful Output**: Terminal-friendly ANSI styling
* 🏷 **Log Levels**: `info`, `warn`, `error`, `success`, `debug`
* 🧵 **Multi-Argument Support**: Accepts strings, objects, and nested styles
* 🖼 **Object-Safe Output**: Automatically stringifies and escapes `{}` safely
* 🎨 **Style Templating**: `{style1.style2 Text}` syntax with nesting
* 🧠 **Runtime Custom Colors**: Define your own named color tokens
* 🔍 **Log Without Icons**: Pass `true` as first argument to disable
* 📘 **TypeScript Support**: Includes `.d.ts` typings for DX

---

## 🚀 Quick Start
```js
const { logger, icon } = require("@kauzx/logger");

// Basic usage
logger.info("Service started");
logger.warn("Low disk space");
logger.error("Failed to \\{ connect \\}");

// Passing multiple values
const user = { name: "Kau", id: 123 };
logger.success("User saved:", user);

// Disable icon (first param as true)
logger.debug(true, "Debugging event", { event: "login" });

// Advanced styling
logger.style(`{bold.cyan ${icon.checkCircle} Important:} {underline Update} {bgRed.white required}`);
```

---

## 🎨 Styling Syntax

Wrap styled text in curly braces using dot notation:

```js
logger.style("{green.bold Build completed!}");
```

### 🔁 Nested and Combined

```js
logger.style("{blue.bold Title:} {underline.white Info here}");
```

---

### ✅ Supported Styles

**Text Colors:**

`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`

**Text Styles:**

`bold`, `dim`, `italic`, `underline`, `inverse`, `hidden`, `strikethrough`

**Background Colors:**

`bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`, `bgGray`

**Bright Colors:**

`brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`

**Bright Backgrounds:**

`bgBrightRed`, `bgBrightGreen`, `bgBrightYellow`, `bgBrightBlue`, `bgBrightMagenta`, `bgBrightCyan`, `bgBrightWhite`

---

## 🎛 Custom Colors

You can define your own named colors using hex codes:

```js
logger.setColor({
  roxoClaro: "#aa66ff",
  fundo: "#1a1a1a"
});

logger.style("{roxoClaro.bold Título roxo}");
```

---

## 🛠 Format Method

Use `.format()` to escape text safely for later styling:

```js
const text = logger.format("{red.bold Isto não será interpretado como estilo}");
logger.style(`{yellow ${text}}`);
```

---

## 🔣 Default Icons

| Level   | Icon | Description        |
| ------- | ---- | ------------------ |
| info    | ℹ    | Informational logs |
| warn    | ⚠    | Warnings           |
| error   | ✖    | Error messages     |
| success | ✔    | Successful actions |
| debug   | ⚙    | Debug information  |

Access icons directly via:

```js
const { icon } = require("@kauzx/logger");
console.log(icon.arrowRight); // →
```

---

## 🧪 TypeScript Support

All types are included automatically via `index.d.ts`. You’ll get full IntelliSense out of the box.

---

## 📐 Additional Methods

### `.style(...args)`

Prints styled content using `{}` syntax and supports multiple arguments.

### `.format(str)`

Returns the escaped version of a string or object (useful for nesting `{}` safely).

### `.setColor({ name: hex })`

Define new colors at runtime that can be used in the style syntax.

### `.custom(...)`

Alias to `.style(...)`.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests.

### Steps:

1. Fork this repository
2. Run `npm install`
3. Create a branch: `git checkout -b feat/my-feature`
4. Commit your changes: `git commit -m "feat: added my feature"`
5. Push and open a pull request

---

## 🔗 Useful Links

* 🔗 [NPM Package](https://www.npmjs.com/package/@kauzx/logger)
* 🛠 [Repository](https://github.com/Kauzxx00/logger)
* 🐛 [Issues](https://github.com/Kauzxx00/logger/issues)
* 📄 [License (MIT)](./LICENSE)

---

## 📄 License

MIT © [Kauzx00](https://github.com/Kauzxx00)