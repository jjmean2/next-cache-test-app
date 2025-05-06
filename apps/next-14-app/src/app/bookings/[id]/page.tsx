import { Suspense } from "react";
import ClientData from "./ClientData";
import ClientProvider from "./ClientProvider";

type Params = Promise<{
  id: string;
}>;

interface Props {
  params: Params;
}

export default async function Page(props: Props) {
  const params = await props.params;
  const { id } = params;
  console.log("🎨 render bookings/[id] Page component", id);

  const promise = fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((response) => {
    return response.json();
  });

  return (
    <div>
      <ClientProvider promise={promise}>
        <h1>Bookings</h1>
        <p>id: {id}</p>
        <p>message: {JSON.stringify(promise)}</p>
        <Suspense fallback={<div>Server Loading...</div>}>
          <ClientData />
        </Suspense>
      </ClientProvider>
    </div>
  );
}
