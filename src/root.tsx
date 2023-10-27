// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
// import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import AppShell from "./components/AppShell";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        {/* <SolidQueryDevtools /> */}
        <Suspense>
          <ErrorBoundary>
            <AppShell>
              <Routes>
                <FileRoutes />
              </Routes>
            </AppShell>
          </ErrorBoundary>
        </Suspense>

        <Scripts />
      </Body>
    </Html>
  );
}
