import styled from "styled-components";

export const tag = styled.div<{ length: number }>`
  padding: 0.4rem 0.6rem;
  background-color: ${(props) => {
    switch (props.length) {
      case 1:
        return "#F9EEE3"; // 1인 경우 색상
      case 2:
        return "#E7F7DB"; // 2인 경우 색상
      case 3:
        return "#F7DBF0"; // 3인 경우 색상
      case 4:
        return "#DBE6F7"; // 4인 경우 색상
      default:
        return "black"; // 기본 색상
    }
  }};
  border-radius: 4px;
  font-size: 1.2rem;
  flex-shrink: 0;
  flex-basis: auto;
  & span {
    color: ${(props) => {
      switch (props.length) {
        case 1:
          return "#d58d49"; // 1인 경우 색상
        case 2:
          return "#86D549"; // 2인 경우 색상
        case 3:
          return "#D549B6"; // 3인 경우 색상
        case 4:
          return "#4981D5"; // 4인 경우 색상
        default:
          return "black"; // 기본 색상
      }
    }};
  }
`;
