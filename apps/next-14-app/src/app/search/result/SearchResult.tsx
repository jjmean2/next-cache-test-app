"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { ReactElement, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { navigateToPage } from "./navigateToPage";

type Props = {
  page?: number;
  regex?: RegExp;
};

export default function SearchResult(props: Props): ReactElement {
  const { page = 1 } = props;
  const router = useRouter();
  const [inputPage, setInputPage] = useState<string>("1");
  const action = navigateToPage.bind(null, Number(inputPage));
  const formRef = useRef<HTMLFormElement>(null);

  console.log("🎨 render SearchResult Client component", page, inputPage);

  const { data, dataUpdatedAt, refetch } = useSuspenseQuery({
    queryKey: ["search", "result", page],
    queryFn: async () => {
      console.log(
        `🔍 [${format(
          new Date(),
          "HH:mm:ss.SSS"
        )}] querying search result for ${page}...`
      );
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${page}`
      );
      const data = await response.json();
      return data;
    },
  });
  console.log("📦 data", data);
  console.log(
    "⏰ %cdataUpdatedAt %c%s",
    "color:red",
    "color:yellow",
    format(dataUpdatedAt, "HH:mm:ss.SSS")
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
        <legend>Client 이동</legend>
        <input
          className="text-black"
          type="number"
          name="page"
          defaultValue={page}
        />
        <button>페이지 이동</button>
      </form>
      <hr />
      <form action={action} ref={formRef}>
        <legend>Server 액션 이동</legend>
        <input
          className="text-black"
          type="number"
          name="page"
          value={inputPage}
          onInput={(e) => {
            console.log("🌴 onInput", e.currentTarget.value);
            setInputPage(e.currentTarget.value);
          }}
        />
        <button>페이지 이동</button>
      </form>
      <button
        onClick={() => {
          formRef.current?.requestSubmit();
        }}
      >
        Form submit by js
      </button>
      <div>Page: {page}</div>
      <button onClick={() => refetch()}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
