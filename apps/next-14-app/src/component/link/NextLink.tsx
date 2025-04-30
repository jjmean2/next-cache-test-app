"use client";

import {
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type HTMLAttributeAnchorTarget,
  forwardRef,
} from "react";

import Link from "next/link";

import { addBasePathIfNeeded } from "./addBasePathIfNeeded";
import {
  type NewWindowBehaviorInApp,
  type NewWindowBehaviorInAppFunction,
  type NewWindowBehaviorInAppPattern,
  type TargetFunction,
  type TargetPattern,
  resolveNewWindowBehaviorInApp,
  resolveTarget,
  runtimeFlightDomain,
} from "./linkUtil";
import { useAppAwareLinkClickHandler } from "./useAppAwareLinkClickHandler";

type LinkProps = ComponentPropsWithoutRef<typeof Link>;

interface Props extends Omit<LinkProps, "href" | "target"> {
  href: string;
  target?: HTMLAttributeAnchorTarget | TargetPattern | TargetFunction;
  newWindowBehaviorInApp?:
    | NewWindowBehaviorInApp
    | NewWindowBehaviorInAppPattern
    | NewWindowBehaviorInAppFunction;
}

/**
 * `next/link`의 `Link` 컴포넌트에 프리비아 앱에서 외부 브라우저로 새 창 열기가 동작하도록 처리한 컴포넌트
 * NextJS 내부용 url을 현재창에서만 여는 경우에는 굳이 사용하지 않아도 됨
 */
const NextLink = forwardRef(function NextLink(
  props: Props,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const {
    href,
    target,
    newWindowBehaviorInApp = "externalBrowser",
    onClick,
    ...rest
  } = props;

  const resolvedTarget = resolveTarget(href, target);
  const resolvedBehavior = resolveNewWindowBehaviorInApp(
    href,
    newWindowBehaviorInApp
  );

  const handleClick = useAppAwareLinkClickHandler({
    // next/link 는 href에 basePath를 자동으로 붙이는 경우가 있음
    url: new URL(addBasePathIfNeeded(href), runtimeFlightDomain),
    onClick,
    target: resolvedTarget,
    newWindowBehaviorInApp: resolvedBehavior,
  });

  return (
    <Link
      ref={ref}
      href={href}
      target={resolvedTarget}
      onClick={handleClick}
      {...rest}
    />
  );
});

export default NextLink;
