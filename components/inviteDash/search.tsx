import * as S from "./styled";

function Search({ result }: any) {
  return (
    <S.section key={result.id}>
      <S.menuDiv>
        <S.menu>
          이름
          <S.text>{result.dashboard.title}</S.text>
        </S.menu>
        <S.menu>
          초대자
          <S.text>{result.inviter.nickname}</S.text>
        </S.menu>
        <S.menu display={"none"}>수락 여부</S.menu>
      </S.menuDiv>

      <S.buttonGap>
        <S.yesButton
          data-action="accept"
          onClick={() => handleinviteToggle("accept", data.id)}
        >
          수락
        </S.yesButton>
        <S.noButton
          data-action="reject"
          onClick={() => handleinviteToggle("reject", data.id)}
        >
          거절
        </S.noButton>
      </S.buttonGap>
    </S.section>
  );
}

export default Search;
