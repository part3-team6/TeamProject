import Card from "@/components/card";
import Header from "@/components/dashHeader";
import Sidemenu from "@/components/sidemenu";
import mockCard from "@/components/card/mock";
import mockHeader from "@/components/dashHeader/mock";
import mockSidemenu from "@/components/sidemenu/mock";
import * as S from "./styled";

export default function DashboardForOne() {
  return (
    <>
      <Header mock={mockHeader[0]} title="대시보드 Test" />
      <Sidemenu mock={mockSidemenu} />
      <S.DashboardContainer>
        <S.DashboardMain>
          <ul>
            <li>
              <Card mock={mockCard} />
            </li>
            <li>
              <Card mock={mockCard} />
            </li>
            <li>
              <Card mock={mockCard} />
            </li>
          </ul>
        </S.DashboardMain>
      </S.DashboardContainer>
    </>
  );
}
