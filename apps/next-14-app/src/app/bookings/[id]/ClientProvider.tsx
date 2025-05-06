"use client";

import { createContext, ReactElement, Suspense, type ReactNode } from "react";

type ClientContext = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const Context = createContext<Promise<ClientContext> | undefined>(
  undefined
);

interface Props {
  promise: Promise<ClientContext>;
  children?: ReactNode;
}

export default function ClientProvider(props: Props): ReactElement {
  const { promise, children } = props;

  return (
    <Context.Provider value={promise}>
      <h1>ClientProvider</h1>
      <Suspense fallback={<div>ClientProvider Loading...</div>}>
        {children}
      </Suspense>
    </Context.Provider>
  );
}
