import { styled } from "styled-components";

export const form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const logo = styled.div`
  position: relative;
  margin: 17.3rem auto 1rem;
  width: 20rem;
  height: 27.9rem;

  @media (max-width: 767) {
    margin: 10.8rem auto 0.8rem;
  }
`;

export const text = styled.p`
  color: var(--black-333236);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 3.8rem;
`;

export const checkBox = styled.div`
  align-items: center;
  display: flex;
  gap: 0.8rem;
`;

export const checkInput = styled.input`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  border: 1px solid var(--gray-D9D9D9);
`;

export const noneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52rem;
  height: 5rem;
  border-radius: 0.8rem;
  background: var(--gray-9FA6B2);
  color: var(--white, #fff);
  /* font-family: Pretendard; */
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 767px) {
    width: 35rem;
    height: 5rem;
    gap: 1rem;
  }
`;

export const button = styled.button`
  width: 52rem;
  height: 5rem;
  border-radius: 0.8rem;
  background: var(--violet-5534DA);
  color: var(--white, #fff);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 767px) {
    width: 35rem;
    height: 5rem;
    gap: 1rem;
  }
`;

export const logintext = styled.div`
  display: flex;
  color: var(--black-333236);
  font-size: 1.6rem;
  gap: 1rem;
`;

export const linkLogin = styled.p`
  color: var(--violet-5534DA);
  text-decoration-line: underline;
`;

export const label = styled.label`
  color: var(--black-333236);
  font-size: 1.6rem;
  font-weight: 400;
`;
