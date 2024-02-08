import Head from "next/head";
import axios from "@/lib/axios";
import useUserStore from "@/store/user";
import { useRouter } from "next/router";
import CreateModal from "@/components/todoModal/createTodoModal/createModal";
import EditModal from "@/components/todoModal/editTodoModal/editModal";

export default function Test() {
  const router = useRouter();
  const { user, setUser } = useUserStore();
  console.log(user);
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
  async function getaaa() {
    const res = await axios.get(`/members?page=1&size=20&dashboardId=3140`);
    console.log(res);
  }

  const click = () => {
    getaaa();
  };
  const clickclick = () => {
    getFd();
  };

  return (
    <>
      <button style={{ width: "200px", height: "200px" }} onClick={click}>
        test
      </button>
      <button style={{ width: "200px", height: "200px" }} onClick={clickclick}>
        내 정보 보기
      </button>
      <CreateModal></CreateModal>
      {/* <EditModal></EditModal> */}
    </>
  );
}
