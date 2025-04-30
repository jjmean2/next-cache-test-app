import type { HTMLAttributeAnchorTarget } from "react";
import { z } from "zod";

import { addBasePathIfNeeded, basePath } from "./addBasePathIfNeeded";

export const runtimeFlightDomain = "http://localhost:4000";

export type ArrayOr<T> = T | T[];

export function asArray<T>(value: ArrayOr<T>): T[] {
  return Array.isArray(value) ? value : [value];
}

/**
 * 도메인이 포함된 절대 URL인지 확인
 */
export function isAbsoluteUrl(href: string): boolean {
  return /^[a-zA-Z][a-zA-Z\d+\-.]*?:/.test(href);
}

/**
 * 프리비아 항공 NextJS 내부 링크인지 확인
 */
export function isNextJSInternal(href: string): boolean {
  const url = new URL(addBasePathIfNeeded(href), runtimeFlightDomain);
  const urlString = url.toString();
  return urlString.startsWith(runtimeFlightDomain + basePath);
}

/**
 * 항공을 포함하여 프리비아 도메인, 서브도메인을 향한 href인지 확인
 */
export function isPriviaDomain(href: string): boolean {
  // 상대 url은 페이지의 도메인을 따르므로 프리비아 도메인으로 간주
  return !isAbsoluteUrl(href) || /^https?:\/\/localhost:4000/.test(href);
}

type UrlPattern =
  | {
      type: "priviaDomain";
      /** pathname과 매칭시킬 패턴. basePath 포함된 경로 */
      pathPattern: ArrayOr<string | RegExp>;
    }
  | {
      type: "absoluteUrl";
      /** url 전체와 매칭시킬 패턴 */
      urlPattern: ArrayOr<string | RegExp>;
    };

function isUrlPatternMatching(
  /** basePath 포함된 href */
  href: string,
  pattern: ArrayOr<UrlPattern>
): boolean {
  if (Array.isArray(pattern)) {
    return pattern.some((p) => isUrlPatternMatching(href, p));
  }

  switch (pattern.type) {
    case "absoluteUrl":
      return asArray(pattern.urlPattern).some((p) =>
        (typeof p === "string" ? new RegExp(p) : p).test(href)
      );
    case "priviaDomain":
      if (!isPriviaDomain(href)) {
        return false;
      }

      const pathname = new URL(href, runtimeFlightDomain).pathname;
      return asArray(pattern.pathPattern).some((p) =>
        (typeof p === "string" ? new RegExp(p) : p).test(pathname)
      );
  }
}

/**
 * 예시
 * ```js
 * const pattern = {
 *   _blank: {
 *     type: 'priviaDomain',
 *     pathPattern: /^\/etc\/info\/.*$/
 *   }
 * }
 * ```
 */
export type TargetPattern = Partial<
  Record<HTMLAttributeAnchorTarget, ArrayOr<UrlPattern>>
>;

export type TargetFunction = (
  href: string
) => HTMLAttributeAnchorTarget | undefined;

export function convertTargetPatternToFunction(pattern: TargetPattern) {
  return (href: string) => {
    for (const [target, urlPattern] of Object.entries(pattern)) {
      if (urlPattern !== undefined && isUrlPatternMatching(href, urlPattern)) {
        return target;
      }
    }
    return undefined;
  };
}

export function resolveTarget(
  href: string,
  target: HTMLAttributeAnchorTarget | TargetPattern | TargetFunction | undefined
): HTMLAttributeAnchorTarget | undefined {
  if (typeof target === "string") {
    return target;
  } else if (typeof target === "function") {
    return target(href);
  } else if (target) {
    return convertTargetPatternToFunction(target)(href);
  }
  return undefined;
}

const NewWindowBehaviorInApp = z
  .literal("externalBrowser")
  .or(z.literal("inAppModal"));
export type NewWindowBehaviorInApp = z.infer<typeof NewWindowBehaviorInApp>;

export type NewWindowBehaviorInAppPattern = Partial<
  Record<NewWindowBehaviorInApp, ArrayOr<UrlPattern>>
>;

export type NewWindowBehaviorInAppFunction = (
  href: string
) => NewWindowBehaviorInApp;

export function convertNewWindowBehaviorInAppPatternToFunction(
  pattern: NewWindowBehaviorInAppPattern,
  defaultBehavior: NewWindowBehaviorInApp = "externalBrowser"
) {
  return (href: string) => {
    for (const [behavior, urlPattern = undefined] of Object.entries(pattern)) {
      const parsed = NewWindowBehaviorInApp.safeParse(behavior);
      if (
        parsed.success &&
        urlPattern !== undefined &&
        isUrlPatternMatching(href, urlPattern)
      ) {
        return parsed.data;
      }
    }
    return defaultBehavior;
  };
}

export function resolveNewWindowBehaviorInApp(
  href: string,
  behavior:
    | NewWindowBehaviorInApp
    | NewWindowBehaviorInAppPattern
    | NewWindowBehaviorInAppFunction
    | undefined,
  defaultBehavior: NewWindowBehaviorInApp = "externalBrowser"
): NewWindowBehaviorInApp {
  if (typeof behavior === "string") {
    return behavior;
  } else if (typeof behavior === "function") {
    return behavior(href);
  } else if (behavior) {
    return convertNewWindowBehaviorInAppPatternToFunction(behavior)(href);
  }
  return defaultBehavior;
}
