import Image from "next/image";
import * as S from "@/components/inviteDash/styled";

function NoDash() {
  return (
    <>
      <S.container>
        {/* <S.title>초대받은 대쉬보드</S.title> */}
        <S.noDashflex>
          <S.unsub>
            <Image src={"images/unsubscribe.svg"} alt="편지지 이미지" fill />
          </S.unsub>
          <S.noDash>아직 초대받은 대시보드가 없어요</S.noDash>
        </S.noDashflex>
      </S.container>
    </>
  );
}

export default NoDash;
