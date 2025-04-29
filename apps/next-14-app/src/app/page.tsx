import Link from "next/link";
import ClientPage from "./ClientPage";
import { headers } from "next/headers";

export default function Home() {
  const host = headers().get("host");
  const xForwardedHost = headers().get("x-forwarded-host");
  const xForwardedPort = headers().get("x-forwarded-port");
  const xForwardedProto = headers().get("x-forwarded-proto");

  const search = "/search";
  const result = "/result";
  const path = `${search}${result}`;
  const origin = `${xForwardedProto}://${host}`;
  console.log("origin", origin);
  const url = new URL(path, origin);
  console.log("url", url);
  return (
    <div>
      <ul>
        <li>Host: {host}</li>
        <li>X-Forwarded-Host: {xForwardedHost}</li>
        <li>X-Forwarded-Port: {xForwardedPort}</li>
        <li>X-Forwarded-Proto: {xForwardedProto}</li>
      </ul>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <p>asdfasdsad fasd fasd fas df asdfs</p>
      <h1>Server Page Link</h1>
      <nav>
        <ul>
          <li>
            <Link href={path}>Link</Link>
          </li>
        </ul>
      </nav>
      Hello
      <ClientPage />
    </div>
  );
}
