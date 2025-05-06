export function assertUnreachable(marker: never, message?: string): never;
export function assertUnreachable(
  marker: never,
  options?: { message?: string; throws?: true }
): never;
export function assertUnreachable(
  marker: never,
  options: { message?: string; throws?: boolean }
): void;
export function assertUnreachable(
  marker: never,
  options?: string | { message?: string; throws?: boolean }
): void {
  const { message = "Didn't expect to get here", throws = true } =
    typeof options === "string" ? { message: options } : options ?? {};
  if (throws) {
    throw new Error(message);
  }
}

export function expectUnreachable(message?: string): never {
  throw new Error(message ?? "Expected to be unreachable");
}
