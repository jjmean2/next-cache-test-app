"use client";

import { ReactElement, useSyncExternalStore, type ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

const emptySubscribe = () => () => {};

export default function ClientOnly(props: Props): ReactElement {
  const { children, fallback } = props;
  const isServer = useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true
  );
  return <div>{isServer ? fallback : children}</div>;
}
