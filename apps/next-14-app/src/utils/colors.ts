import * as ansi from "./ansiColors";
import * as browser from "./browserColors";

const isServer = typeof window === "undefined";

// text colors
export const black = isServer ? ansi.black : browser.black;
export const red = isServer ? ansi.red : browser.red;
export const green = isServer ? ansi.green : browser.green;
export const yellow = isServer ? ansi.yellow : browser.yellow;
export const blue = isServer ? ansi.blue : browser.blue;
export const magenta = isServer ? ansi.magenta : browser.magenta;
export const cyan = isServer ? ansi.cyan : browser.cyan;
export const white = isServer ? ansi.white : browser.white;

// bright text colors
export const brightBlack = isServer ? ansi.brightBlack : browser.brightBlack;
export const brightRed = isServer ? ansi.brightRed : browser.brightRed;
export const brightGreen = isServer ? ansi.brightGreen : browser.brightGreen;
export const brightYellow = isServer ? ansi.brightYellow : browser.brightYellow;
export const brightBlue = isServer ? ansi.brightBlue : browser.brightBlue;
export const brightMagenta = isServer
  ? ansi.brightMagenta
  : browser.brightMagenta;
export const brightCyan = isServer ? ansi.brightCyan : browser.brightCyan;
export const brightWhite = isServer ? ansi.brightWhite : browser.brightWhite;

// background colors
export const bgBlack = isServer ? ansi.bgBlack : browser.bgBlack;
export const bgRed = isServer ? ansi.bgRed : browser.bgRed;
export const bgGreen = isServer ? ansi.bgGreen : browser.bgGreen;
export const bgYellow = isServer ? ansi.bgYellow : browser.bgYellow;
export const bgBlue = isServer ? ansi.bgBlue : browser.bgBlue;
export const bgMagenta = isServer ? ansi.bgMagenta : browser.bgMagenta;
export const bgCyan = isServer ? ansi.bgCyan : browser.bgCyan;
export const bgWhite = isServer ? ansi.bgWhite : browser.bgWhite;

// bright background colors
export const bgBrightBlack = isServer
  ? ansi.bgBrightBlack
  : browser.bgBrightBlack;
export const bgBrightRed = isServer ? ansi.bgBrightRed : browser.bgBrightRed;
export const bgBrightGreen = isServer
  ? ansi.bgBrightGreen
  : browser.bgBrightGreen;
export const bgBrightYellow = isServer
  ? ansi.bgBrightYellow
  : browser.bgBrightYellow;
export const bgBrightBlue = isServer ? ansi.bgBrightBlue : browser.bgBrightBlue;
export const bgBrightMagenta = isServer
  ? ansi.bgBrightMagenta
  : browser.bgBrightMagenta;
export const bgBrightCyan = isServer ? ansi.bgBrightCyan : browser.bgBrightCyan;
export const bgBrightWhite = isServer
  ? ansi.bgBrightWhite
  : browser.bgBrightWhite;

// styles
export const reset = isServer ? ansi.reset : browser.reset;
export const bold = isServer ? ansi.bold : browser.bold;
export const dim = isServer ? ansi.dim : browser.dim;
export const italic = isServer ? ansi.italic : browser.italic;
export const underline = isServer ? ansi.underline : browser.underline;
export const inverse = isServer ? ansi.inverse : browser.inverse;
export const hidden = isServer ? ansi.hidden : browser.hidden;
export const strikethrough = isServer
  ? ansi.strikethrough
  : browser.strikethrough;
