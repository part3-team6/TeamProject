import { useEffect, useRef, useState } from "react";
import axios from "@/lib/axios";
import * as S from "./styled";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/dashHeader";
import Sidemenu from "@/components/sidemenu";
import List from "@/components/memberList";
import EditName from "@/components/editName";
import useEditStore from "@/store/edit";
import Modal from "@/components/modal/modal";
import ModalCheckIt from "@/components/modal/modalCheckIt";
import useSideStore from "@/store/side";
import InviteModal from "@/components/inviteModal";

export default function Edit() {
  const { setSide } = useSideStore();
  // const [headerData, setHeaderData] = useState<any>();
  // const [sidemenuData, setSidemenuData] = useState<any>();
  const [memberListData, setMemberListData] = useState<any>();
  const [emailListData, setEmailListData] = useState<any>();
  const [dashboardData, setDashboardData] = useState<any>();
  const [inviteEmailInput, setInviteEmailInput] = useState<string>("");
  const { inputState, colorState, inviteModalState } = useEditStore();

  const router = useRouter();
  const { id } = router.query;

  const modalRef = useRef();

  const getData = async (link: string) => {
    try {
      const response = await axios.get(link);
      return response;
    } catch (e) {
      throw Error(`겟 에러 ${e} 발생`);
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
      throw Error(`겟 에러 ${e} 발생`);
    }
  };

  const putData = async (link: string, data: any) => {
    try {
      const response = await axios.put(link, data);
    } catch (e) {
      throw Error(`풋 에러 ${e} 발생`);
    }
  };

  const deleteData = async (link: string) => {
    try {
      const response = await axios.delete(link);
    } catch (e) {
      throw Error(`딜리트 에러 ${e} 발생`);
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
      "https://sp-taskify-api.vercel.app/2-6/dashboards?navigationMethod=infiniteScroll&page=1&size=100",
    );
    // setSidemenuData(sidemenuResponse.data);
    setSide(sidemenuResponse.data);
  };

  const handleKickUser = async (targetId: number) => {
    await deleteData(`/members/${targetId}`);
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
        const dashboardResponse = await getDashboardData(`dashboards/${id}`);
        setDashboardData(dashboardResponse?.data);

        const memberListResponse = await getData(`members?dashboardId=${id}`); //`members?dashboardId=${id}`
        setMemberListData(memberListResponse.data);

        const emailListResponse = await getData(`dashboards/${id}/invitations`); //`dashboards/${id}/invitations`
        setEmailListData(emailListResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <S.Background>
      <Sidemenu id={id} />
      <Header member={memberListData} title={dashboardData?.title} />
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
