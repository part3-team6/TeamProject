import Head from "next/head";
import Test from "@/components/card";
import mock from "@/components/card/mock";

export default function Home() {
  return <Test mock={mock}></Test>;
}
