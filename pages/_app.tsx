import ToDoModal from "@/components/ToDoModal";
import GlobalStyle from "@/styles/global-style";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToDoModal />
    </>
  );
}
