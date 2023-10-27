// import { createQuery } from "../../../query/packages/solid-query";
import { Suspense, createResource } from "solid-js";
import { A } from "solid-start";

export default function Home() {
  const [data] = createResource(
    async () => {
      await new Promise((r) => setTimeout(r, 10));
      return "hello";
    },
    {
      onHydrated(k, info) {
        console.log("onHydrated yoooooo", k, info);
      },
    }
  );

  return (
    <Suspense
      fallback={
        <main class="text-center mx-auto text-gray-700 p-4">loadingggg</main>
      }
    >
      <main class="text-center mx-auto text-gray-700 p-4">{data()}</main>
    </Suspense>
  );
}
