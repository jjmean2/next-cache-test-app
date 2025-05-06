"use client";
import * as c from "@/utils/colors";

import { useSuspenseQuery } from "@tanstack/react-query";
import { ReactElement, Suspense } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { log } from "@/utils/log";
import { SubmitButton } from "./SubmitButton";
import Time from "./Time";

type Props = {
  page?: number;
};

export default function SearchResult(props: Props): ReactElement {
  const { page = 1 } = props;
  const router = useRouter();
  log("🎨 %crender SearchResult Client component", c.magenta, page);
  const { data, dataUpdatedAt, refetch } = useSuspenseQuery({
    queryKey: ["search", "result", page],
    queryFn: async () => {
      log(`%cquerying search result for ${page}...`, c.blue);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${page}`
      );
      const data = await response.json();
      return data;
    },
  });
  console.log(
    `%cdataUpdatedAt:`,
    c.cyan,
    format(dataUpdatedAt, "yyyy-MM-dd HH:mm:ss.SSS")
  );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const page = Number(formData.get("page"));
          router.push("/search/result?page=" + page);
        }}
      >
        <legend>Client router.push</legend>
        <input
          className="text-black"
          type="number"
          name="page"
          defaultValue={page}
        />
        <SubmitButton>페이지 이동</SubmitButton>
      </form>
      <div>Page: {page}</div>
      <button onClick={() => refetch()}>react-query refetch</button>
      <div>
        <Suspense fallback={<div>Time loading...</div>}>
          <Time title="DataUpdatedAt" date={new Date(dataUpdatedAt)} />
        </Suspense>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
