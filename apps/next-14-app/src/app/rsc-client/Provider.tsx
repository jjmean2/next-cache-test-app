"use client";

import { ReactElement, use, useRef, useState, type ReactNode } from "react";
import ValueRef from "./ValueRef";

interface Props {
  initialState?: number;
  children?: ReactNode;
}

export default function Provider(props: Props): ReactElement {
  const { children, initialState } = props;
  const [count, setCount] = useState(0);
  const [state, setState] = useState(() => {
    const value = Math.floor(Math.random() * 100);
    console.log("    📌 [Provider] state 초기화", value);
    return value;
  });

  const ref = useRef(new ValueRef("Provider", Math.floor(Math.random() * 100)));
  console.log("🖌️ render [Provider]", state);
  return (
    <div>
      <h2>Provider</h2>
      <ul>
        <li>state: {state}</li>
        <li>ref: {ref.current.value}</li>
      </ul>
      <button onClick={() => setState((prev) => prev + 1)}>
        Provider State 증가
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Provider Count 증가
      </button>
      <hr />
      {count % 2 === 0 ? (
        <SuspendingComponent initialState={initialState}>
          {children}
        </SuspendingComponent>
      ) : (
        children
      )}
    </div>
  );
}

function SuspendingComponent(props: {
  initialState?: number;
  children?: ReactNode;
}) {
  console.log("🖌️ render [SuspendingComponent]", props.initialState);
  const [state, setState] = useState(0);
  if (state === 1) {
    use(new Promise((resolve) => setTimeout(resolve, 1000)));
  }
  return (
    <div>
      <button
        onClick={() => {
          setState((prev) => prev + 1);
        }}
      >
        {props.initialState} Suspend
      </button>
      {state === 1 ? props.children : null}
    </div>
  );
}
