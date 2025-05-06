"use client";

import { Suspense, useEffect, useState, useSyncExternalStore } from "react";
import { unstable_postpone as postpone } from "react";
const emptySubscribe = () => () => {};
export function useHydration1() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

export function useHydration() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHydrated(true);
    }, 10);
  }, []);
  return hydrated;
}

export function LocalTime({ date }: { date: Date | string | number }) {
  const hydrated = useHydration();
  const myDate = new Date(date);
  console.log(hydrated, "LocalTime", myDate.toLocaleTimeString());
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {typeof window === "undefined" ? (
        postpone("client-only")
      ) : (
        <time dateTime={myDate.toISOString()}>
          {myDate.toLocaleTimeString()}
          {hydrated ? "" : " (UTC)"}
        </time>
      )}
    </Suspense>
  );
}
