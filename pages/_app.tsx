import GlobalStyle from "@/styles/global-style";
import type { AppProps } from "next/app";

import ToDoModal from "@/components/toDoModal/ToDoModal";
import mock from "../components/toDoModal/mock";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToDoModal {...mock} />
    </>
  );
}
