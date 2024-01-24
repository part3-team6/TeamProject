import Head from "next/head";
import Test from "@/components/sidemenu";
import mock from "@/components/sidemenu/mock";

export default function Home() {
  return <Test mock={mock}></Test>;
}
