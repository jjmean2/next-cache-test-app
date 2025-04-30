import type {
  HTMLAttributeAnchorTarget,
  MouseEvent,
  MouseEventHandler,
} from "react";

import type { NewWindowBehaviorInApp } from "./linkUtil";

import { useSyncExternalStore } from "react";

const PRIVIA_APP = "privia_travel";

const emptySubscribe = () => () => {};

function useUserAgentType() {
  const isApp = useSyncExternalStore(
    // isApp은 변동이 없는 값이므로, dummy 구독함수 사용
    emptySubscribe,
    // 클라이언트 렌더될 때 실행될 로직
    () => navigator.userAgent.toLowerCase().includes(PRIVIA_APP),
    // 서버사이드 렌더와 hydration 때 실행될 로직(앱인지 판단할 수 없음)
    () => undefined
  );

  return {
    isApp,
  };
}

export default useUserAgentType;

function isTargetForNewWindow(
  target: HTMLAttributeAnchorTarget | undefined
): boolean {
  return !["_self", "_top", "_parent", undefined].includes(target);
}

type OnClickHandler = MouseEventHandler<HTMLAnchorElement> | undefined;

export function useAppAwareLinkClickHandler(params: {
  url: URL;
  onClick: MouseEventHandler<HTMLAnchorElement> | undefined;
  target: HTMLAttributeAnchorTarget | undefined;
  newWindowBehaviorInApp: NewWindowBehaviorInApp;
}): OnClickHandler {
  const { url, onClick, target, newWindowBehaviorInApp } = params;

  const { isApp } = useUserAgentType();

  const shouldOpenNewWindowInPriviaApp = isApp && isTargetForNewWindow(target);
  console.log(
    '"shouldOpenNewWindowInPriviaApp"',
    shouldOpenNewWindowInPriviaApp
  );

  const handleClick = (() => {
    if (!shouldOpenNewWindowInPriviaApp) {
      // 새 창으로 여는 경우가 아니면, 링크 동작 그대로 수행
      return onClick;
    }

    switch (newWindowBehaviorInApp) {
      case "externalBrowser":
        // 외부 브라우저로 열려면 링크 클릭시 기본 링크 동작을 막고, 브릿지를 이용해 열어야 함
        return (event: MouseEvent<HTMLAnchorElement>) => {
          onClick?.(event);
          event.preventDefault();
          console.log("🔥 open mobile browser", url.toString());
        };
      case "inAppModal":
        // target이 새 창일 때, 앱에서 링크 동작을 그대로 수행하면, inAppModal로 열림
        return onClick;
      default:
        return onClick;
    }
  })();

  console.log("handleClick", handleClick);

  return handleClick;
}
