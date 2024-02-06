import styled from "styled-components";

interface ListProps {
  type?: string;
}

export const ListContainer = styled.div<ListProps>`
  width: 62rem;
  height: ${({ type }) =>
    type === "member" ? "40.4rem" : type === "invite" ? "47.7rem" : ""};

  padding: 2.6rem 0 0 0;
  border-radius: 8px;
  background-color: var(--white-FFFFFF);

  @media (max-width: 767px) {
    width: 28.4rem;
    height: ${({ type }) =>
      type === "member" ? "36.5rem" : type === "invite" ? "40.6rem" : ""};
  }
`;
export const Title = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0 2.8rem 0 2.8rem;
  margin: 0 0 2.7rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 28.4rem;
    height: 3.6rem;
    padding: 0 2rem 0 2rem;
  }
`;

export const TitleName = styled.p`
  width: 11rem;
  height: 2.9rem;
  color: var(--black-333236);
  font-size: 2.4rem;
  font-weight: 700;
  @media (max-width: 767px) {
    width: 6rem;
    height: 2.4rem;
    font-size: 2rem;
  }
`;

export const Pagenation = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media (max-width: 767px) {
    gap: 1.6rem;
  }
`;

export const PageCount = styled.p`
  color: var(--black-333236);
  font-size: 1.4rem;
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const PagenationButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PagenationButtonLeft = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;

  background: white;
  border: 1px var(--gray-D9D9D9) solid;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  @media (max-width: 767px) {
    width: 3.6rem;
    height: 3.6rem;
  }
  &:hover {
    background-color: var(--gray-EEEEEE);
  }
`;
export const PagenationButtonRight = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
  background: white;
  border: 1px var(--gray-D9D9D9) solid;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  @media (max-width: 767px) {
    width: 3.6rem;
    height: 3.6rem;
  }
  &:hover {
    background-color: var(--gray-EEEEEE);
  }
`;

export const PagenationButtonImgContainer = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 0;
  top: 0;

  @media (max-width: 767px) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export const InviteButton = styled.button`
  width: 10.5rem;
  height: 3.2rem;
  background: var(--violet-5534DA);
  border-radius: 0.4rem;
  border: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  &:active {
    background: #332081;
  }

  @media (max-width: 767px) {
    width: 8.6rem;
    height: 2.8rem;
  }
`;
export const InviteButtonContainer = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  position: relative;

  @media (max-width: 767px) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;

export const InviteText = styled.p`
  color: var(--white-FFFFFF);
  font-size: 1.4rem;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

export const SortContainer = styled.div<ListProps>`
  width: 100%;
  height: 1.9rem;
  padding: 0 2.8rem 0 2.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    height: 2.8rem;
    padding: 0 2rem 0 2rem;
  }
`;

export const Sort = styled.p`
  color: var(--gray-9FA6B2);
  font-size: 1.6rem;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const MemberList = styled.div``;

export const MemberOfDashboard = styled.div`
  width: 100%;
  height: 7rem;
  padding: 0 2.8rem 0 2.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 1px #eeeeee solid;

  &:first-child {
    border-top: 0;
  }

  @media (max-width: 767px) {
    height: 5.8rem;
    padding: 0 2rem 0 2rem;
  }
`;

export const NameAndImg = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const Name = styled.p`
  color: var(--black-333236);
  font-size: 1.6rem;
  font-weight: 400;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const DeleteButton = styled.div`
  width: 8.4rem;
  height: 3.2rem;
  border-radius: 4px;
  border: 1px #d9d9d9 solid;

  color: var(--violet-5534DA);
  font-size: 1.4rem;
  font-weight: 500;

  background: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    width: 5.2rem;
    height: 2.4rem;
    font-size: 1.2rem;
  }

  &:hover {
    background-color: "#36208f";
  }
`;

export const NoEmailImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8rem 0 0 0;
`;

export const NoEmailText = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--gray-D9D9D9);
`;

export const CrownImgConainer = styled.div`
  width: 8.4rem;
  height: 3rem;
  position: relative;
  @media (max-width: 767px) {
    width: 5.2rem;
    height: 2.4rem;
  }
`;
