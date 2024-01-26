import Image from "next/image";
import * as S from "./styled";

const ToDoModalComment = () => {
  return (
    <S.ModalComment>
      <S.ModalCommentImg>
        <Image src="/images/chip+.svg" alt="img" width={30} height={30} />
      </S.ModalCommentImg>
      <S.ModalCommentContainer>
        <div>
          <h1>정만철</h1>
          <p>2022.12.27 14:00</p>
        </div>
        <span>오늘 안에 ccc까지 만들 수 있을까요?</span>
        <ul>
          <li>수정</li>
          <li>삭제</li>
        </ul>
      </S.ModalCommentContainer>
    </S.ModalComment>
  );
};

export default ToDoModalComment;
