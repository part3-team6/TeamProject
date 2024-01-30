import GlobalStyle from "@/styles/global-style";
import type { AppProps } from "next/app";
import DashboardForOne from "./dashboardForOne";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <DashboardForOne />
      <Component {...pageProps} />
    </>
  );
}
