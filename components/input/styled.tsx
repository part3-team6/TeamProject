import styled from "styled-components";

export const inputWrap = styled.div`
  width: 100%;
  max-width: 52rem;
  height: 7.7rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const inputInner = styled.div`
  position: relative;
`;

export const label = styled.label`
  color: var(--black-333236);
  font-size: 1.6rem;
  font-weight: 400;
`;

export const input = styled.input<{ wrong: boolean }>`
  width: 100%;
  padding: 15px 16px;
  border-radius: 8px;
  border: ${(props) =>
    props.wrong
      ? "1px solid var(--red-D6173A)"
      : "1px solid var(--violet-5534DA)"};
  background: var(--white-FFFFFF);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
`;

export const imageWrap = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 1.2rem;
  right: 1.6rem;
  cursor: pointer;
`;

export const wrong = styled.div`
  color: var(--red-D6173A);
  font-size: 1.4rem;
`;
