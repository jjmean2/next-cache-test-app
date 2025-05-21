"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactElement, useTransition } from "react";
import { navigateToPage } from "./navigate";
import { revalidatePath } from "next/cache";

export default function SubClient(): ReactElement {
  const [isPending, startTransition] = useTransition();
  console.log(
    "🎨 render SubClient component, isPending:",
    isPending ? "⌛" : "📌"
  );
  const router = useRouter();
  const search = useSearchParams();
  const page = Number(search.get("page") || "0");
  return (
    <div>
      <div>isPending: {String(isPending)}</div>
      <h3>With Transitioning</h3>
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              router.refresh();
            });
          }}
        >
          Refresh
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              const newSearch = new URLSearchParams(search);
              newSearch.set("page", String(page - 1));
              router.push("/start?" + newSearch.toString());
            });
          }}
        >
          decrement
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              const newSearch = new URLSearchParams(search);
              newSearch.set("page", String(page + 1));
              router.push("/start?" + newSearch.toString());
            });
          }}
        >
          increment
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              router.refresh();
              const newSearch = new URLSearchParams(search);
              newSearch.set("page", String(page - 1));
              router.push("/start?" + newSearch.toString());
            });
          }}
        >
          refresh and decrement
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              router.refresh();
              const newSearch = new URLSearchParams(search);
              newSearch.set("page", String(page + 1));
              router.push("/start?" + newSearch.toString());
            });
          }}
        >
          refresh and increment
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              const newSearch = new URLSearchParams(search);
              newSearch.set("page", String(page - 1));
              router.push("/start?" + newSearch.toString());
              router.refresh();
            });
          }}
        >
          decrement and refresh
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              const newSearch = new URLSearchParams(search);
              newSearch.set("page", String(page + 1));
              router.push("/start?" + newSearch.toString());
              router.refresh();
            });
          }}
        >
          increment and refresh
        </button>
      </div>
      <hr />
      <h3>Without Transitioning</h3>
      <div>
        <button
          onClick={() => {
            router.refresh();
          }}
        >
          Refresh without transition
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => {
            const newSearch = new URLSearchParams(search);
            newSearch.set("page", String(page - 1));
            router.push("/start?" + newSearch.toString());
          }}
        >
          decrement without transition
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            const newSearch = new URLSearchParams(search);
            newSearch.set("page", String(page + 1));
            router.push("/start?" + newSearch.toString());
          }}
        >
          increment without transition
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => {
            router.refresh();
            const newSearch = new URLSearchParams(search);
            newSearch.set("page", String(page - 1));
            router.push("/start?" + newSearch.toString());
          }}
        >
          refresh and decrement without transition
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            router.refresh();
            const newSearch = new URLSearchParams(search);
            newSearch.set("page", String(page + 1));
            router.push("/start?" + newSearch.toString());
          }}
        >
          refresh and increment without transition
        </button>
      </div>
      <hr />
      <div>
        <button
          onClick={() => {
            const newSearch = new URLSearchParams(search);
            newSearch.set("page", String(page - 1));
            router.push("/start?" + newSearch.toString());
            router.refresh();
          }}
        >
          decrement and refresh without transition
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            const newSearch = new URLSearchParams(search);
            newSearch.set("page", String(page + 1));
            router.push("/start?" + newSearch.toString());
            router.refresh();
          }}
        >
          increment and refresh without transition
        </button>
      </div>
      <hr />
      <h3>Reavlidate Path (Error)</h3>
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              revalidatePath("/start");
              const newSearch = new URLSearchParams(search);
              newSearch.set("page", String(page - 1));
              router.push("/start?" + newSearch.toString());
            });
          }}
        >
          revalidatePath and decrement
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            startTransition(() => {
              revalidatePath("/start");
              const newSearch = new URLSearchParams(search);
              newSearch.set("page", String(page + 1));
              router.push("/start?" + newSearch.toString());
            });
          }}
        >
          revalidatePath and increment
        </button>
        <hr />
        <h3>Server Action (Recommended?)</h3>
        <div>
          <button
            onClick={() => {
              navigateToPage(page - 1);
            }}
          >
            decrement by action
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              navigateToPage(page + 1);
            }}
          >
            increment by action
          </button>
        </div>
      </div>
    </div>
  );
}
