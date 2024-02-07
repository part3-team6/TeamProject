import styled from "styled-components";

interface NavProps {
  black?: boolean;
}

export const Nav = styled.nav<NavProps>`
  width: 100%;
  height: 7rem;
  padding: 1.6rem 8rem 1.5rem 1.6rem;

  background-color: ${({ black }) => (black ? "black" : "white")};

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1199px) and (min-width: 768px) {
    padding: 1.6rem 4rem 1.5rem 1.6rem;
  }
  @media (max-width: 767px) {
    height: 6rem;
    padding: 1.6rem 2.4rem 1.687rem 2.4rem;
  }
`;

export const LogoContainer = styled.div`
  width: 12.1rem;
  height: 3.9rem;
  padding: 0.4rem 0.4rem 0rem 0.4rem;
  position: relative;
  @media (max-width: 767px) {
    width: 2.36rem;
    height: 2.71rem;
    padding: 0 0 0 0;
  }
`;

export const LoginoutContainer = styled.div`
  width: 13.4rem;
  height: 1.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 10.6rem;
    height: 1.7rem;
  }
`;

export const Loginout = styled.p<NavProps>`
  color: ${({ black }: NavProps) => (black ? "white" : "var(--black-333236)")};
  font-size: 1.6rem;
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
