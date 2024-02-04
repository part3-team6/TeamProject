import { useEffect, useState } from "react";
import Header from "@/components/dashHeader";
import mock from "@/components/dashHeader/mock";
import * as S from "./styled";
import Sidemenu from "@/components/sidemenu";
import axios from "@/lib/axios";
import List from "@/components/memberList";
import EditName from "@/components/editName";
import { useRouter } from "next/router";
import { useStore } from "zustand";
import useEditStore from "@/store/edit";
import Image from "next/image";
import Link from "next/link";

export default function MyDashboard() {
  const [headerData, setHeaderData] = useState<any>();
  const [sidemenuData, setSidemenuData] = useState<any>();
  const [memberListData, setMemberListData] = useState<any>();
  const [emailListData, setEmailListData] = useState<any>();
  const [dashboardData, setDashboardData] = useState<any>();
  const { inputState, colorState } = useEditStore();

  const router = useRouter();
  const { id } = router.query;

  const getData = async (link: string) => {
    try {
      const response = await axios.get(link);
      return response;
    } catch (e) {
      throw Error(`에러 ${e} 발생`);
    }
  };

  const getDashboardData = async (link: string) => {
    try {
      const response = await axios.get(link);
      return response;
    } catch (e: any) {
      if (e.response.status === 404) {
        router.push("/404");
      }
    }
  };

  const putData = async (link: string, data: any) => {
    try {
      const response = await axios.put(link, data);
    } catch (e) {
      throw Error(`에러 ${e} 발생`);
    }
  };

  const deleteData = async (link: string) => {
    try {
      const response = await axios.delete(link);
    } catch (e) {
      throw Error(`에러 ${e} 발생`);
    }
  };

  const handleEditDashboard = async () => {
    await putData(`dashboards/${id}`, {
      title: inputState,
      color: colorState,
    });
    const dashboardResponse = await getData(`dashboards/${id}`);
    setDashboardData(dashboardResponse.data);
    const sidemenuResponse = await getData(
      "dashboards?navigationMethod=infiniteScroll",
    );
    setSidemenuData(sidemenuResponse.data);
  };

  const handleKickUser = async (targetId: number) => {
    await deleteData(`${id}/members/${targetId}`);
    const memberListResponse = await getData(`members?dashboardId=${id}`);
    setMemberListData(memberListResponse.data);
  };

  const handleCancelEmail = async (targetId: number) => {
    await deleteData(`dashboards/${id}/invitations/${targetId}`);
    const emailListResponse = await getData(`dashboards/${id}/invitations`);
    setEmailListData(emailListResponse.data);
  };

  const handleDeleteDashboard = async () => {
    const ok = confirm("삭제하시겠습니까?");
    if (ok) {
      await deleteData(`dashboards/${id}`);
      router.push("/mydashboard");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboardResponse = await getDashboardData(`dashboards/${id}`); //`dashboards/${id}2652`
        setDashboardData(dashboardResponse.data);

        const sidemenuResponse = await getData(
          "dashboards?navigationMethod=infiniteScroll",
        );
        setSidemenuData(sidemenuResponse.data);

        const memberListResponse = await getData(`members?dashboardId=${id}`); //`members?dashboardId=${id}`
        setMemberListData(memberListResponse.data);

        const emailListResponse = await getData(`dashboards/${id}/invitations`); //`dashboards/${id}/invitations`
        setEmailListData(emailListResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    // console.log("id", id);
    fetchData();
  }, [id]);

  // console.log("side", sidemenuData);
  // console.log("member", memberListData);
  // console.log("Email", emailListData);
  // console.log("dashboardData", dashboardData);
  // console.log("input", inputState, colorState);

  return (
    <S.Background>
      <Sidemenu mock={sidemenuData} />
      <Header mock={memberListData} title={dashboardData?.title} />
      <S.DashboardContainer>
        <S.MainContainer>
          <S.DashboardSettings>
            <Link href={`/boards/${id}`}>
              <S.BackPageButton>
                <Image
                  alt="돌아가기버튼 화살표"
                  src="/images/arrowRight.svg"
                  width={20}
                  height={20}
                  style={{ transform: "scaleX(-1)" }}
                />
                <p>돌아가기</p>
              </S.BackPageButton>
            </Link>
            <EditName
              data={dashboardData}
              handleEditDashboard={handleEditDashboard}
            />
            <List
              props="member"
              memberListData={memberListData}
              emailListData={emailListData}
              handleKickUser={handleKickUser}
              handleCancelEmail={handleCancelEmail}
            />
            <List
              props="invite"
              memberListData={memberListData}
              emailListData={emailListData}
              handleKickUser={handleKickUser}
              handleCancelEmail={handleCancelEmail}
            />
            <S.DashboardDeleteButton onClick={handleDeleteDashboard}>
              대시보드 삭제하기
            </S.DashboardDeleteButton>
          </S.DashboardSettings>
        </S.MainContainer>
      </S.DashboardContainer>
    </S.Background>
  );
}
