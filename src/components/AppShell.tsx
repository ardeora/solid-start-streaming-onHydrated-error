import { createSignal, JSXElement } from "solid-js";
import { A } from "solid-start";

export default function AppShell(props: {
  children?: JSXElement | JSXElement[] | null;
}) {
  return (
    <div class="h-screen bg-gray-950 flex flex-col">
      <header class="bg-gray-900 h-14 flex justify-center">
        <div class="container">
          <nav>
            <ul class="flex items-center bg-red-400">
              <li>
                <A href="/">Home</A>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {props.children}
    </div>
  );
}
