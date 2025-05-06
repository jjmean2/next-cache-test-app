import { format } from "date-fns";
import * as c from "./colors";

const isServer = typeof window === "undefined";
const styleSpecifier = isServer ? "%s" : "%c";

export function formatTime(date: Date) {
  return format(date, "HH:mm:ss.SSS");
}

export function log(...args: unknown[]) {
  const [message, ...rest] = args;
  const time = formatTime(new Date());
  if (typeof message === "string" && /%[sdifoOc]/.test(message)) {
    console.log(
      `%c[${time}]%c ${message}`.replaceAll("%c", styleSpecifier),
      c.yellow,
      c.reset,
      ...rest
    );
  } else {
    console.log(
      `%c[${time}]%c`.replaceAll("%c", styleSpecifier),
      c.yellow,
      c.reset,
      ...args
    );
  }
}
