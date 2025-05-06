"use client";

import { ReactElement, use } from "react";
import { Context } from "./ClientProvider";
import { expectUnreachable } from "@/utils/assertUnreachable";

export default function ClientData(): ReactElement {
  const promise = use(Context) ?? expectUnreachable();
  console.log('"🎨 render ClientData component");', promise);
  const data = use(promise);
  console.log("📦 data", data);
  return (
    <div>
      <h1>ClientData</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
