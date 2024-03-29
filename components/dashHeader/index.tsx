import Image from "next/image";
import * as S from "./styled";
import { useEffect, useRef, useState } from "react";
import useUserStore from "@/store/user";
import DropDown from "../dropDown";
import useToggle from "@/hooks/useToggle";
import Link from "next/link";
import useEditStore from "@/store/edit";
import { useRouter } from "next/router";
import InviteModal from "../inviteModal";
import useInviteModalStore from "@/store/inviteModal";

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
  member?: {
    members: Member[];
    totalCount: number;
  };
  title?: string;
}

function Header({ member, title }: HeaderProps) {
  const { user } = useUserStore();
  const [totalMember, setTotalMember] = useState<number>(0);
  const [isTablet, setIsTablet] = useState(true);
  const [currentUser, setCurrentUser] = useState<Member | null>();
  const [showMymenu, setShowMymenu, showMymenuToggle] = useToggle(false);
  const { setInviteModalState } = useInviteModalStore(); //주스탄드에서 초대모달창 상태관리

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

  const sliceMember = isTablet
    ? member?.members.slice(0, 2)
    : member?.members.slice(0, 5);

  useEffect(() => {
    if (member && sliceMember) {
      setTotalMember(member.totalCount - sliceMember.length);
    }
  }, [sliceMember]);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const myNameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        myNameRef.current &&
        !myNameRef.current.contains(event.target as Node)
      ) {
        setShowMymenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowMymenu, dropdownRef, myNameRef]);

  return (
    <>
      <S.headerWrap>
        {title !== "계정관리" && title !== "내 대시보드" && <InviteModal />}
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
                {sliceMember?.slice(0, 4).map((item, index) =>
                  item.profileImageUrl ? (
                    <S.headerCircle>
                      <Image src={item.profileImageUrl} alt="프로필 img" fill />
                    </S.headerCircle>
                  ) : (
                    <S.headerCircle
                      key={index}
                      style={{ backgroundImage: item.profileImageUrl }}
                    >
                      {item.nickname?.slice(0, 1).toUpperCase()}
                    </S.headerCircle>
                  ),
                )}

                {totalMember > 0 && (
                  <S.headerCircle>+{totalMember}</S.headerCircle>
                )}
              </S.member>

              <S.line></S.line>
            </>
          )}

          <S.myName onClick={showMymenuToggle} ref={myNameRef}>
            <S.headerCircle>
              {currentUser && !currentUser.profileImageUrl ? (
                currentUser.nickname?.slice(0, 1).toUpperCase()
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
