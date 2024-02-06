import React, { Fragment } from "react";
import * as S from "@/components/todoModal/styled";

interface DropDownProps {
  members: { nickname: string; profileImageUrl: string }[];
  selectedMemberIndex: number;
  onSelectMember: (member: {
    nickname: string;
    profileImageUrl: string;
  }) => void;
}

function DropDownModal({
  members,
  selectedMemberIndex,
  onSelectMember,
}: DropDownProps) {
  return (
    <>
      <S.dropDownContainer>
        <S.dropDownWrapper>
          <S.nickNameContainer>
            {members.map((member, index) => (
              <Fragment key={index}>
                <S.circle onClick={() => onSelectMember(member)}>
                  {member.nickname.charAt(0)}
                </S.circle>
                <S.nickName>{member.nickname}</S.nickName>
              </Fragment>
            ))}
          </S.nickNameContainer>
        </S.dropDownWrapper>
      </S.dropDownContainer>
    </>
  );
}

export default DropDownModal;
