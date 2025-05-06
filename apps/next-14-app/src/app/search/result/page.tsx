import { getQueryClient } from "@/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import SearchResult from "./SearchResult";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import * as c from "@/utils/ansiColors";
import { log } from "@/utils/log";
import { SubmitButton } from "./SubmitButton";

export const dynamic = "force-dynamic";

type SearchParams = {
  page?: string;
};

export default async function Page(props: { searchParams: SearchParams }) {
  log("%c🎨 render search/result Page component", c.magenta);
  const searchParams = await props.searchParams;
  const parsed = Number(searchParams.page);
  const page = Number.isNaN(parsed) ? 1 : parsed;

  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ["search", "result", page],
    queryFn: async () => {
      log(`%cPrefetching search result for ${page}...`, c.blue);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${page}`,
        { cache: "no-store" }
      );
      const data = await response.json();
      return data;
    },
  });

  const state = dehydrate(queryClient);

  async function action(formData: FormData) {
    "use server";
    log("%c🎨 action%c", c.green, c.reset, formData);
    redirect("/search/result?page=" + formData.get("page"));
  }

  return (
    <HydrationBoundary state={state}>
      <form action={action}>
        <legend>Server form action (redirect)</legend>
        <input
          className="text-black"
          type="number"
          name="page"
          defaultValue={page}
        />
        <SubmitButton>페이지 이동</SubmitButton>
      </form>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchResult page={page} />
      </Suspense>
    </HydrationBoundary>
  );
}
