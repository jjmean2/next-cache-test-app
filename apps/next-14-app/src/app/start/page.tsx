import { Suspense } from "react";
import Client from "./Client";

// export const dynamic = "force-static"; // force re-render

export default async function Page(props: {
  searchParams: Promise<{
    page?: string;
  }>;
}) {
  const { page } = await props.searchParams;
  //   const page = "1";
  const parsed = Number(page || 0);
  console.log("🎨 render start Page component", parsed);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("✅ awaited start page component", parsed);
  const now = Date.now();
  return (
    <div>
      My Page
      <p>page: {parsed}</p>
      <Suspense key={parsed} fallback={<div>Page loading...</div>}>
        <Client now={now} />
      </Suspense>
    </div>
  );
}
