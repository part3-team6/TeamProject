import * as S from "./styled";

function Email({ email }: { email: string }) {
  return (
    <S.MemberOfDashboard>
      <S.Name>{email}</S.Name>
      <S.DeleteButton>취소</S.DeleteButton>
    </S.MemberOfDashboard>
  );
}

export default Email;
