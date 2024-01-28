import Head from "next/head";
import axios from "@/lib/axios";

export default function Test() {
  async function getFolders() {
    const res = await axios.post(`auth/login`, {
      email: "codeit@codeit.com",
      password: "123456789",
    });
    console.log(res.data.accessToken);
    localStorage.removeItem("login");
    localStorage.setItem("login", res.data.accessToken);
  }

  async function getFd() {
    const res = await axios.get(`users/me`);
    console.log(res);
  }

  const click = () => {
    getFolders();
  };
  const clickclick = () => {
    getFd();
  };
  const clickclickclick = () => {
    localStorage.removeItem("login");
  };

  return (
    <>
      <button style={{ width: "200px", height: "200px" }} onClick={click}>
        로그인
      </button>
      <button style={{ width: "200px", height: "200px" }} onClick={clickclick}>
        내 정보 보기
      </button>
      <button
        style={{ width: "200px", height: "200px" }}
        onClick={clickclickclick}
      >
        로그아웃
      </button>
    </>
  );
}
