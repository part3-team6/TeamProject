import React, { Fragment } from "react";
import * as S from "@/components/todoModal/styled";

interface StatusDropDownProps {
  statusTitles: string[];
  onSelectStatusTitle: (index: string) => void;
}

function StatusDropDownModal({
  statusTitles,
  onSelectStatusTitle,
}: StatusDropDownProps) {
  return (
    <>
      <S.dropDownContainer>
        <S.dropDownWrapper>
          {statusTitles.map((title, index) => (
            <S.statusFrame
              key={index}
              onClick={() => onSelectStatusTitle(title)}
            >
              <S.statusEllipse />
              {title}
            </S.statusFrame>
          ))}
        </S.dropDownWrapper>
      </S.dropDownContainer>
    </>
  );
}

export default StatusDropDownModal;
