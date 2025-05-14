import { getQueryClient } from "@/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { format } from "date-fns";
import SearchResult from "./SearchResult";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

type SearchParams = {
  page?: string;
};

export default async function Page(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const parsed = Number(searchParams.page);
  const page = Number.isNaN(parsed) ? 1 : parsed;

  if (page > 300) {
    redirect("/search/result?page=13");
  }

  console.log("🎨 render search/result Page component", page);

  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ["search", "result", page],
    queryFn: async () => {
      console.log(
        `🔍 [${format(
          new Date(),
          "HH:mm:ss.SSS"
        )}] Prefetching search result for ${page}...`
      );
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${page}`
      );
      const data = await response.json();
      return data;
    },
  });

  const state = dehydrate(queryClient);

  async function action(formData: FormData) {
    "use server";
    console.log("🎨 action", formData);
    redirect("/search/result?page=" + formData.get("page"));
  }

  return (
    <HydrationBoundary state={state}>
      <form action={action}>
        <legend>Server 이동</legend>
        <input
          className="text-black"
          type="number"
          name="page"
          defaultValue={page}
        />
        <button>페이지 이동</button>
      </form>
      <Suspense>
        <SearchResult page={page} />
      </Suspense>
      <Link href="../result">Link</Link>
    </HydrationBoundary>
  );
}
