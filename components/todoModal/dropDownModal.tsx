import React, { Fragment } from "react";
import * as S from "@/components/todoModal/styled";
import Image from "next/image";

interface DropDownProps {
  members: { nickname: string; profileImageUrl: string; id: number }[];
  selectedMemberIndex: number;

  onSelectMember: (member: {
    id: number;
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
          {members.map((member, index) => (
            <Fragment key={index}>
              <S.memberWrapper onClick={() => onSelectMember(member)}>
                {member.profileImageUrl === null ? (
                  <S.circle>{member.nickname.charAt(0).toUpperCase()}</S.circle>
                ) : (
                  <S.circle>
                    <Image
                      src={member.profileImageUrl}
                      alt="프로필이미지"
                      fill
                    />
                  </S.circle>
                )}

                <S.nickName>{member.nickname}</S.nickName>
              </S.memberWrapper>
            </Fragment>
          ))}
        </S.dropDownWrapper>
      </S.dropDownContainer>
    </>
  );
}

export default DropDownModal;
