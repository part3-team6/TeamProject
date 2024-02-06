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
          <S.statusContainer>
            {statusTitles.map((title, index) => (
              <div key={index} onClick={() => onSelectStatusTitle(title)}>
                {title}
              </div>
            ))}
          </S.statusContainer>
        </S.dropDownWrapper>
      </S.dropDownContainer>
    </>
  );
}

export default StatusDropDownModal;