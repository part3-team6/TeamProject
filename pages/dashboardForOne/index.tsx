import Header from "@/components/dashHeader";
import Sidemenu from "@/components/sidemenu";
import mockHeader from "@/components/dashHeader/mock";
import mockSidemenu from "@/components/sidemenu/mock";
import * as S from "./styled";

export default function DashboardForOne() {
  return (
    <>
      <Header mock={mockHeader} title="hi" />
      <S.DashboardContainer>
        <Sidemenu mock={mockSidemenu} />
        <S.DashboardMain></S.DashboardMain>
      </S.DashboardContainer>
    </>
  );
}
