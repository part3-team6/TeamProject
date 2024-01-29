import Image from "next/image";
import * as S from "./styled";

function Member({
  profileImageUrl,
  nickname,
  isOwner,
}: {
  profileImageUrl: string;
  nickname: string;
  isOwner: boolean;
}) {
  return (
    <S.MemberOfDashboard>
      <S.NameAndImg>
        <Image alt="프로필사진" src={profileImageUrl} width={38} height={38} />
        <S.Name>{nickname}</S.Name>
      </S.NameAndImg>
      {isOwner ? (
        <S.CrownImgConainer>
          <Image alt="대시보드주인장완장" src="/images/crown.svg" fill />
        </S.CrownImgConainer>
      ) : (
        <S.DeleteButton>삭제</S.DeleteButton>
      )}
    </S.MemberOfDashboard>
  );
}

export default Member;
