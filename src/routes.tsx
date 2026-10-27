import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";

/**
 * Flat under RootLayout: TopBar is sitewide, so there is no longer an
 * "interior" layout distinct from home.
 *
 * Home is eager (it is the entry point and owns LCP); the rest are lazily
 * chunked so the first load does not carry the calculator, catalogue and map.
 */

/**
 * Shown during the very first render when the landing route is a lazy chunk
 * still being fetched (e.g. opening /about directly). Without it React Router
 * warns that no `HydrateFallback` was provided. Quiet, on-brand, brief.
 */
function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface" role="status" aria-label="Loading">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-slate-200 border-t-panel-blue" />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    hydrateFallbackElement: <RouteFallback />,
    children: [
      { index: true, element: <Home /> },
      { path: "install", lazy: async () => ({ Component: (await import("./pages/Install")).Install }) },
      { path: "products", lazy: async () => ({ Component: (await import("./pages/Products")).Products }) },
      {
        path: "products/:slug",
        lazy: async () => ({ Component: (await import("./pages/ProductDetail")).ProductDetail }),
      },
      { path: "projects", lazy: async () => ({ Component: (await import("./pages/Projects")).ProjectsPage }) },
      { path: "about", lazy: async () => ({ Component: (await import("./pages/About")).About }) },
      { path: "contact", lazy: async () => ({ Component: (await import("./pages/Contact")).ContactPage }) },
      { path: "*", lazy: async () => ({ Component: (await import("./pages/NotFound")).NotFound }) },
    ],
  },
]);
