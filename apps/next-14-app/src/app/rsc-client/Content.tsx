import Provider from "./Provider";
import Client from "./Client";
import { Suspense } from "react";
import ClientOnly from "./ClientOnly";
import Sibling from "./Sibling";

export default function Content() {
  const randomNumber = Math.floor(Math.random() * 100);

  console.log("🖌️ render [Content]", randomNumber);

  return (
    <div>
      <h1>Content: {randomNumber}</h1>
      <ClientOnly fallback={<h2>⌛ Loading...</h2>}>
        <Suspense fallback={<h2>⌛ Loading...</h2>}>
          <Sibling />
          <Provider initialState={randomNumber}>
            <Client initialState={randomNumber} />
          </Provider>
        </Suspense>
      </ClientOnly>
    </div>
  );
}
