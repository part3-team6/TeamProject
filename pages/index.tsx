import Head from "next/head";
import Test from "@/components/dashHeader";
import mock from "@/components/dashHeader/mock";

export default function Home() {
  return (
    <>
      <Test mock={mock} title={"header"} />
    </>
  );
}
