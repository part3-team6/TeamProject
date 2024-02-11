import React, { Fragment } from "react";
import * as S from "@/components/todoModal/styled";
import useColumnsStore from "@/store/boards";

interface StatusDropDownProps {
  statusTitles: string[];
  onSelectStatusTitle: any;
}

function StatusDropDownModal({
  statusTitles,
  onSelectStatusTitle,
}: StatusDropDownProps) {
  const { columns } = useColumnsStore();
  console.log("statusTitles?", columns.data);
  return (
    <>
      <S.dropDownContainer>
        <S.dropDownWrapper>
          {columns.data.map((item: any) => (
            <S.statusFrame
              key={item.id}
              onClick={() => onSelectStatusTitle(item.title, item.id)}
            >
              <S.statusEllipse />
              {item.title}
            </S.statusFrame>
          ))}
        </S.dropDownWrapper>
      </S.dropDownContainer>
    </>
  );
}

export default StatusDropDownModal;
