"use client";

import { ReactElement, useState, type ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export default function Provider(props: Props): ReactElement {
  const { children } = props;
  const [state, setState] = useState(0);
  console.log("🖌️ render [Provider]", state);
  return (
    <div>
      <h2>Provider: {state}</h2>
      <button onClick={() => setState((prev) => prev + 1)}>
        Provider State 증가
      </button>
      {children}
    </div>
  );
}
