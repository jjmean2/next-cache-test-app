"use client";

import {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ValueRef from "./ValueRef";

export default function Sibling(): ReactElement {
  console.log("🖌️ render [Sibling]");

  const [state] = useState(() => {
    const value = Math.floor(Math.random() * 100);
    console.log("    📌 [Sibling] state 초기화", value);
    return value;
  });

  const ref = useRef(new ValueRef("Sibling", Math.floor(Math.random() * 100)));

  useLayoutEffect(() => {
    console.log("    ✨ [Sibling] useLayoutEffect");
    return () => {
      console.log("    🧹 [Sibling] useLayoutEffect cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("    ✨ [Sibling] useEffect");
    return () => {
      console.log("    🧹 [Sibling] useEffect cleanup");
    };
  }, []);

  return (
    <div>
      <h3>Sibling</h3>
      <ul>
        <li>state: {state}</li>
        <li>ref: {ref.current.value}</li>
      </ul>
    </div>
  );
}
