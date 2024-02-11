import { useEffect, useState } from "react";
import useInviteModalStore from "@/store/inviteModal.js";
import * as S from "./styled";
import Modal from "@/components/modal/modal";
import ModalCheckIt from "../modal/modalCheckIt";
import axios from "@/lib/axios";
import { useRouter } from "next/router";

function InviteModal() {
  const [inviteEmailInput, setInviteEmailInput] = useState<string>("");
  const [canIInvite, setCanIInvite] = useState<boolean>(false);
  const {
    inviteModalState,
    setInviteModalState,
    errorModal,
    setErrorModal,
    errorModal2,
    setErrorModal2,
    emailListData,
    setEmailListData,
  } = useInviteModalStore();

  const router = useRouter();
  const { id } = router.query;

  const getData = async (link: string) => {
    const response = await axios.get(link);
    return response;
  };

  const postData = async (link: string, data: any) => {
    try {
      const response = await axios.post(link, data);
    } catch (e: any) {
      if (e.response.status === 409) {
        await setErrorModal(true);
        setInviteModalState(false);
      } else if (e.response.status === 404) {
        setErrorModal2(true);
        setInviteModalState(false);
      }
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const emailListResponse = await getData(`dashboards/${id}/invitations`);
        setEmailListData(emailListResponse.data);
      } catch {}
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    //이메일인지 검사하고 맞으면 true값 반환
    const reg =
      /^(?!\s*$)[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    setCanIInvite(reg.test(inviteEmailInput));
  }, [inviteEmailInput]);

  const handleModalEsc = (event: KeyboardEvent) => {
    if (event?.key === "Escape") {
      handleSetInviteModalStateFalse();
    }
  };

  return (
    <>
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
            handleModalEsc={handleModalEsc}
            disabled={canIInvite}
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
    </>
  );
}

export default InviteModal;
