import "../styles/globals.css";
import type { AppProps } from "next/app";
import SidebarLayout from "../Layouts/SidebarLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
