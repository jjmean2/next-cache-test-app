import Provider from "./Provider";
import Client from "./Client";
import { Suspense } from "react";

export default function Content() {
  const randomNumber = Math.floor(Math.random() * 100);

  console.log("🖌️ render [Content]", randomNumber);

  return (
    <div>
      <h1>Content: {randomNumber}</h1>
      <Provider>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Client initialState={randomNumber} />
        </Suspense>
      </Provider>
    </div>
  );
}
