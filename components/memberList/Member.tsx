import Image from "next/image";
import * as S from "./styled";

function Member({
  profileImageUrl,
  nickname,
  isOwner,
  userId,
  id,
  handleKickUser,
}: {
  profileImageUrl: string | null;
  nickname: string;
  isOwner: boolean;
  userId: number;
  id: number;
  handleKickUser: (targetId: number) => Promise<void>;
}) {
  const handleClick = () => {
    const ok = confirm("퇴장시키시겠습니까?");
    if (ok) {
      handleKickUser(id);
    }
  };

  return (
    <S.MemberOfDashboard>
      <S.NameAndImg>
        {profileImageUrl === null ? (
          <S.headerCircle>{nickname.slice(0, 1).toUpperCase()}</S.headerCircle>
        ) : (
          <Image
            alt="프로필사진"
            src={profileImageUrl}
            width={38}
            height={38}
            style={{ borderRadius: "50%" }}
          />
        )}
        <S.Name>{nickname}</S.Name>
      </S.NameAndImg>
      {isOwner ? (
        <S.CrownImgConainer>
          <Image alt="대시보드주인장완장" src="/images/crown.svg" fill />
        </S.CrownImgConainer>
      ) : (
        <S.DeleteButton onClick={handleClick}>삭제</S.DeleteButton>
      )}
    </S.MemberOfDashboard>
  );
}

export default Member;
