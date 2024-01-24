import Image from "next/image";
import * as S from "./styled";

function Sidemenu() {
  return (
    <S.sidemenu>
      <S.sideLogo>
        <S.sideLogoImg>
          <Image src={"/images/logoNavMobile.svg"} alt="logo" fill />
        </S.sideLogoImg>
        <span>Taskify</span>
      </S.sideLogo>

      <S.subTitle>
        <span>Dash Boards</span>

        <S.more>
          <Image src={"/images/chip+.svg"} alt="more" fill />
        </S.more>
      </S.subTitle>

      <S.sideList>비브리지</S.sideList>
    </S.sidemenu>
  );
}

export default Sidemenu;
