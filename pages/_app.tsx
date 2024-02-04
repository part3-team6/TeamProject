import GlobalStyle from "@/styles/global-style";
import type { AppProps } from "next/app";
import DashboardForOne from "./boards/[id]";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
