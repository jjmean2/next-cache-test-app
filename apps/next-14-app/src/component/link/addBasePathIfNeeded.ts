import { isAbsoluteUrl } from "./linkUtil";

export const basePath = "/flight";

/**
 * 인자로 받은 `href`가 origin 없이 `/`로 시작하는 절대 경로인 경우, basePath를 붙여서 반환
 *
 * @privateRemarks
 * next/link의 Link 컴포넌트는 `href`로 받은 값이 origin 없이 `/`로 시작하는 절대 경로인 경우,
 * basePath를 붙인 URL로 해석함 (a 태그를 렌더할 때 href 속성에 basePath를 붙임)
 *
 * @see {@link https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#links}
 *
 * 따라서 `href`가 실제로 어떤 경로를 가리키는지 알려면 동일하게 `/`로 시작할 때 basePath를
 * 붙여야 함. nextjs에 addBasePath라는 유틸이 있지만, 내부용 모듈이므로, 적당히 비슷한 로직으로
 * 구현함
 *
 * @see {@link https://github.com/vercel/next.js/blob/91e08e5690f1176603157cb987b9077136f8d227/packages/next/src/client/app-dir/link.tsx#L689-L700}
 */
export function addBasePathIfNeeded(href: string): string {
  if (!isAbsoluteUrl(href) && href.startsWith("/")) {
    return `${basePath}${href}`;
  } else {
    return href;
  }
}
