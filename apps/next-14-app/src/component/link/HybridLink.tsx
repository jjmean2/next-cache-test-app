import { ReactElement } from "react";

import type { LinkProps } from "next/link";

import type { ALinkProps } from "./ALink";
import ALink from "./ALink";
import NextLink from "./NextLink";
import { isNextJSInternal } from "./linkUtil";

interface Props extends Omit<LinkProps, "target" | "href">, ALinkProps {}

/**
 * `href`의 값에 따라 `ALink`와 `NextLink`를 구분하여 렌더하는 컴포넌트
 * `href` 값이 상수인 경우, 직접 `ALink`, `NextLink`, `Link`, `a`를 사용해도 무방
 * `href`의 값을 빌드타임에 미리 알 수 없고, NextJS 내부용 url, 외부용 url 둘다 올 수 있는 경우에 사용
 * 또는 `href` 값을 굳이 신경 쓰고 싶지 않을 때, `HybridLink`로 통일 가능
 *
 * `CommonLink`를 대체하는 용도
 */
export default function HybridLink(props: Props): ReactElement {
  if (isNextJSInternal(props.href)) {
    return <NextLink {...props} />;
  } else {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      as,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      replace,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      scroll,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      shallow,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      passHref,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      prefetch,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      locale,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      legacyBehavior,
      // next/link 전용 props 제거
      ...aLinkProps
    } = props;
    return <ALink {...aLinkProps} />;
  }
}
