"use client";
import { useRouter } from "next/navigation";
import { ReactElement, use, useReducer, useRef, useState } from "react";
import ValueRef from "./ValueRef";

async function getRandomNumber() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return Math.floor(Math.random() * 100);
}

interface Props {
  initialState?: number;
}

let promise = getRandomNumber();

export default function Client(props: Props): ReactElement {
  const { initialState = 0 } = props;

  const [, forceUpdate] = useReducer((state: number) => state + 1, 0);

  console.log("🖌️ render [Client]", initialState);

  const [state, setState] = useState(() => {
    console.log("    📌 [Client] state 초기화", initialState);
    return initialState;
  });

  const ref = useRef(new ValueRef("Content", initialState));

  const router = useRouter();

  const clientValue = use(promise);

  return (
    <div>
      <h3>Client</h3>
      <ul>
        <li>random-number: {initialState}</li>
        <li>state: {state}</li>
        <li>ref: {ref.current.value}</li>
        <li>clientValue: {clientValue}</li>
      </ul>
      <nav className="[&>*]:ml-2">
        <button onClick={() => setState((prev) => prev + 1)}>
          Client State 증가
        </button>
        <button onClick={() => router.refresh()}>새로고침</button>
        <button
          onClick={() =>
            router.push(`/rsc-client?count=${Math.floor(Math.random() * 100)}`)
          }
        >
          푸시
        </button>
        <button
          onClick={() => {
            promise = getRandomNumber();
            forceUpdate();
          }}
        >
          클라이언트 value 수정
        </button>
      </nav>
    </div>
  );
}
