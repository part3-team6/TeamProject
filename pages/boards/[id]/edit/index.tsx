import { useEffect, useRef, useState } from "react";
import axios from "@/lib/axios";
import * as S from "./styled";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/dashHeader";
import mock from "@/components/dashHeader/mock";
import Sidemenu from "@/components/sidemenu";
import List from "@/components/memberList";
import EditName from "@/components/editName";
import useEditStore from "@/store/edit";
import Modal from "@/components/modal/modal";
import ModalCheckIt from "@/components/modal/modalCheckIt";

export default function Edit() {
  const [headerData, setHeaderData] = useState<any>();
  const [sidemenuData, setSidemenuData] = useState<any>();
  const [memberListData, setMemberListData] = useState<any>();
  const [emailListData, setEmailListData] = useState<any>();
  const [dashboardData, setDashboardData] = useState<any>();
  const [inviteEmailInput, setInviteEmailInput] = useState<string>("");
  const [canIInvite, setCanIInvite] = useState<boolean>(false);
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [errorModal2, setErrorModal2] = useState<boolean>(false);
  const { inputState, colorState, inviteModalState, setInviteModalState } =
    useEditStore();

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

  const postData = async (link: string, data: any) => {
    try {
      const response = await axios.post(link, data);
    } catch (e: any) {
      if (e.response.status === 409) {
        await setErrorModal(true);
        setInviteModalState(false);
      } else if (e.response.status === 404) {
        await setErrorModal2(true);
        setInviteModalState(false);
      }
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
    setSidemenuData(sidemenuResponse.data);
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

  const handleSetInviteModalStateFalse = () => {
    setInviteModalState(false);
    setErrorModal(false);
    setErrorModal2(false);
  };

  const handleInviteEmail = async () => {
    const isItExist = emailListData?.invitations.some(
      (invitation: any) => invitation.invitee.email === inviteEmailInput,
    );
    if (canIInvite) {
      if (!isItExist) {
        await postData(`dashboards/${id}/invitations`, {
          email: inviteEmailInput,
        });
        const emailListResponse = await getData(`dashboards/${id}/invitations`);
        setEmailListData(emailListResponse.data);
        setInviteModalState(false);
      } else {
        await setErrorModal(true);
        setInviteModalState(false);
      }
    }
  };

  const handleSideMenuUpdate = async () => {
    const sidemenuResponse = await getData(
      "dashboards?navigationMethod=infiniteScroll",
    );
    setSidemenuData(sidemenuResponse.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboardResponse = await getDashboardData(`dashboards/${id}`);
        setDashboardData(dashboardResponse?.data);

        const sidemenuResponse = await getData(
          "https://sp-taskify-api.vercel.app/2-6/dashboards?navigationMethod=infiniteScroll&page=1&size=100",
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

    fetchData();
  }, [id]);

  useEffect(() => {
    //이메일인지 검사하고 맞으면 true값 반환
    const reg =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    setCanIInvite(reg.test(inviteEmailInput));
  }, [inviteEmailInput]);

  return (
    <S.Background>
      <Sidemenu mock={sidemenuData} myDashboard={handleSideMenuUpdate} />
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
      {inviteModalState ? (
        <S.ModalContainer onClick={handleSetInviteModalStateFalse}>
          <Modal
            title="초대하기"
            name="이메일"
            Placeholder="이메일"
            cancelButton="취소"
            submitButton="초대"
            cancel={handleSetInviteModalStateFalse}
            submit={handleInviteEmail}
            value={setInviteEmailInput}
          />
        </S.ModalContainer>
      ) : (
        ""
      )}
      {errorModal ? (
        <S.ModalContainer onClick={handleSetInviteModalStateFalse}>
          <ModalCheckIt
            text={"이미 초대된 회원입니다."}
            submitButton={"확인"}
            wrong={handleSetInviteModalStateFalse}
          />
        </S.ModalContainer>
      ) : (
        ""
      )}
      {errorModal2 ? (
        <S.ModalContainer onClick={handleSetInviteModalStateFalse}>
          <ModalCheckIt
            text={"존재하지 않는 회원입니다."}
            submitButton={"확인"}
            wrong={handleSetInviteModalStateFalse}
          />
        </S.ModalContainer>
      ) : (
        ""
      )}
    </S.Background>
  );
}
