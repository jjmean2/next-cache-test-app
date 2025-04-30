"use client";

import {
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type HTMLAttributeAnchorTarget,
  forwardRef,
} from "react";

import {
  type NewWindowBehaviorInApp,
  type NewWindowBehaviorInAppFunction,
  type NewWindowBehaviorInAppPattern,
  type TargetFunction,
  type TargetPattern,
  isPriviaDomain,
  resolveNewWindowBehaviorInApp,
  resolveTarget,
  runtimeFlightDomain,
} from "./linkUtil";
import { useAppAwareLinkClickHandler } from "./useAppAwareLinkClickHandler";

type AProps = ComponentPropsWithoutRef<"a">;

function _blankUnlessPriviaDomain(
  href: string
): HTMLAttributeAnchorTarget | undefined {
  if (!isPriviaDomain(href)) {
    return "_blank";
  }
}

export interface ALinkProps extends Omit<AProps, "href" | "target"> {
  href: string;
  target?: HTMLAttributeAnchorTarget | TargetPattern | TargetFunction;
  newWindowBehaviorInApp?:
    | NewWindowBehaviorInApp
    | NewWindowBehaviorInAppPattern
    | NewWindowBehaviorInAppFunction;
}

/**
 * `a` 태그에 다음 처리를 추가한 컴포넌트
 * 1. 프리비아 앱에서 외부 브라우저로 새 창 열기가 동작하도록 처리
 * 2. 타깃 url이 privia domain이 아닌 경우, 기본적으로 새 창으로 열도록 처리
 * 3. `href`에 따라 `target`을 다르게 설정하는 규칙을 받을 수 있게 처리
 * 4. `href`에 따라 프리비아 앱에서 새 창이 어떻게 열려야 할지 설정하는 규칙을 받을 수 있게 처리
 *
 * 1번 동작은 `a` 링크를 쓰는 대부분의 경우에 필요하므로, `a` 대신 `ALink`를 사용하는 것을 권장.
 */
const ALink = forwardRef(function ALink(
  props: ALinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const {
    href,
    target = _blankUnlessPriviaDomain,
    newWindowBehaviorInApp = "externalBrowser",
    onClick,
    ...rest
  } = props;

  const resolvedTarget = resolveTarget(href, target);
  const resolvedBehavior = resolveNewWindowBehaviorInApp(
    href,
    newWindowBehaviorInApp
  );

  console.log("resolvedBehavior", resolvedBehavior);

  const handleClick = useAppAwareLinkClickHandler({
    url: new URL(href, runtimeFlightDomain),
    onClick,
    target: resolvedTarget,
    newWindowBehaviorInApp: resolvedBehavior,
  });

  return (
    <a
      ref={ref}
      href={href}
      target={resolvedTarget}
      onClick={handleClick}
      {...rest}
    />
  );
});

export default ALink;
