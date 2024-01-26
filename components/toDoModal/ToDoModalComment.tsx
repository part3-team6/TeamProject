import Image from "next/image";
import * as S from "./styled";

interface CommentProps {
  key: number;
  comment?: string;
}

const ToDoModalComment = (comments: CommentProps) => {
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
        <span>{comments.comment}</span>
        <ul>
          <li>수정</li>
          <li>삭제</li>
        </ul>
      </S.ModalCommentContainer>
    </S.ModalComment>
  );
};

export default ToDoModalComment;
