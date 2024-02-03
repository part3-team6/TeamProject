import Image from "next/image";
import * as S from "./styled";

function Member({
  profileImageUrl,
  nickname,
  isOwner,
  id,
  handleKickUser,
}: {
  profileImageUrl: string | null;
  nickname: string;
  isOwner: boolean;
  id: number;
  handleKickUser: (targetId: number) => Promise<void>;
}) {
  const handleClick = () => {
    handleKickUser(id);
  };

  return (
    <S.MemberOfDashboard>
      <S.NameAndImg>
        <Image
          alt="프로필사진"
          src={
            profileImageUrl === null ? "/images/codeit.svg" : profileImageUrl
          }
          width={38}
          height={38}
          style={{ borderRadius: "50%" }}
        />
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
