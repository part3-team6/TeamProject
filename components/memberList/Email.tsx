import { MouseEventHandler } from "react";
import * as S from "./styled";

function Email({
  email,
  id,
  handleCancelEmail,
}: {
  email: string;
  id: number;
  handleCancelEmail: (targetId: number) => Promise<void>;
}) {
  const handleClick = () => {
    handleCancelEmail(id);
  };
  return (
    <S.MemberOfDashboard>
      <S.Name>{email}</S.Name>
      <S.DeleteButton onClick={handleClick}>취소</S.DeleteButton>
    </S.MemberOfDashboard>
  );
}

export default Email;
