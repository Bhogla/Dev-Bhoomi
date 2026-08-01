import { Outlet, ScrollRestoration } from "react-router";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { CallFloat } from "../components/CallFloat";

/**
 * Shell shared by every route, home included. One navigation treatment
 * sitewide — the hero's floating pill is an action row, not a nav.
 */
export function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <TopBar />
      <Outlet />
      <Footer />
      <CallFloat />
      <WhatsAppFloat />
    </>
  );
}
