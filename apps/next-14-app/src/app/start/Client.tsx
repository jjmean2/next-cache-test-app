"use client";

import { ReactElement, Suspense } from "react";
import SubClient from "./SubClient";

interface Props {
  now: number;
}

export default function Client(props: Props): ReactElement {
  const { now } = props;
  console.log("🎨 render Client component");
  return (
    <div>
      Client
      <p>now: {new Date(now).toLocaleString()}</p>
      <Suspense fallback={<div>LLL...</div>}>
        <SubClient />
      </Suspense>
    </div>
  );
}
