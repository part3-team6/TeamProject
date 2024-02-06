import Image from "next/image";
import * as S from "./styled";
import { useEffect, useRef, useState } from "react";
import useUserStore from "@/store/user";
import DropDown from "../dropDown";
import useToggle from "@/hooks/useToggle";
import Link from "next/link";
import useEditStore from "@/store/edit";
import { useRouter } from "next/router";

interface Member {
  id?: number;
  userId?: number;
  email?: string;
  nickname?: string;
  profileImageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
  isOwner?: boolean;
}

interface HeaderProps {
  mock: {
    members: Member[];
    totalCount: number;
  };
  title: string;
}

function Header({ mock, title }: HeaderProps) {
  const { user } = useUserStore();
  const [member, setMember] = useState(true);
  const [isTablet, setIsTablet] = useState(true);
  const [currentUser, setCurrentUser] = useState<Member | null>(null);
  const [showMymenu, setShowMymenu, showMymenuToggle] = useToggle(false);
  const { setInviteModalState } = useEditStore(); //주스탄드에서 초대모달창 상태관리

  const router = useRouter();
  const { id } = router.query;

  const handleOpenInviteModal = () => {
    setInviteModalState(true);
  };

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1124);
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 초기 사이즈 체크
    handleResize();

    // 컴포넌트 언마운트시 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliceMock = isTablet
    ? mock?.members.slice(0, 2)
    : mock?.members.slice(0, 5);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const myNameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        myNameRef.current &&
        !myNameRef.current.contains(event.target)
      ) {
        setShowMymenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.headerWrap>
        <S.dashBoard>{title}</S.dashBoard>
        <S.headerData>
          {title !== "계정관리" && title !== "내 대시보드" && (
            <>
              <Link href={`/boards/${id}/edit`}>
                <S.btn>
                  <Image
                    src="/images/settings.svg"
                    alt="settings"
                    width={20}
                    height={20}
                  />
                  <span>관리</span>
                </S.btn>
              </Link>
              <S.btn onClick={handleOpenInviteModal}>
                <Image
                  src="/images/chip+white.svg"
                  alt="settings"
                  width={20}
                  height={20}
                />
                <span>초대하기</span>
              </S.btn>
              <S.member>
                {member &&
                  sliceMock?.slice(0, 4).map((item, index) => (
                    <S.headerCircle
                      key={index}
                      style={{ backgroundImage: item.profileImageUrl }}
                    >
                      {item.nickname.slice(0, 1).toUpperCase()}
                    </S.headerCircle>
                  ))}
                {sliceMock ? (
                  <S.headerCircle>+{mock.totalCount - 2}</S.headerCircle>
                ) : (
                  <S.headerCircle>+{mock?.totalCount - 4}</S.headerCircle>
                )}
              </S.member>

              <S.line></S.line>
            </>
          )}

          <S.myName onClick={showMymenuToggle} ref={myNameRef}>
            <S.headerCircle>
              {currentUser && !currentUser.profileImageUrl ? (
                currentUser.nickname.slice(0, 1).toUpperCase()
              ) : (
                <Image
                  src={currentUser?.profileImageUrl || ""}
                  alt="유저 프로필"
                  fill
                />
              )}
            </S.headerCircle>
            <span>{currentUser?.nickname}</span>
          </S.myName>
        </S.headerData>
      </S.headerWrap>
      {showMymenu && <DropDown ref={dropdownRef} />}
    </>
  );
}

export default Header;
