import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: -30rem;
  top: 0;
  z-index: 9999;

  @media (max-width: 1199px) and (min-width: 768px) {
    left: -16rem;
  }
  @media (max-width: 767px) {
    left: -7rem;
  }
`;
