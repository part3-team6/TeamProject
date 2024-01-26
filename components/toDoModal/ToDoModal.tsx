import { ReactElement, useEffect, useState } from "react";
import Button from "./Button";
import closeX from "../../public/images/closeX.svg";
import ToDoModalComment from "./ToDoModalComment";
import Image from "next/image";
import optionDots from "../../public/images/3dot.svg";
import ToDoModalOption from "./ToDoModalOption";
import ToDoModalUser from "./ToDoModalUser";
import * as S from "./styled";

interface ModalProps {
  columnName: string;
  user: {
    name: string;
    image?: string;
  };
  title: string;
  content: string;
  deadline: string;
  tags?: string[];
  img?: string;
}

const ToDoModal: React.FC<ModalProps> = ({
  columnName,
  user,
  title,
  content,
  deadline,
  tags,
  img,
}) => {
  const [column, setColumn] = useState("todo");
  const [comment, setComment] = useState("");
  const [renderedComponent, setRenderedComponent] =
    useState<ReactElement | null>(null);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment) {
      console.log(`Comment submmitted: ${comment}`);
    }
    // 실제 서버로 댓글을 전송하는 로직 추가해야됨!
  };

  const onClickModalOption = () => {
    if (renderedComponent) {
      setRenderedComponent(null);
    } else {
      setRenderedComponent(<ToDoModalOption />);
    }
  };

  const onClickModalClose = () => {
    return;
  };

  useEffect(() => {
    setColumn(columnName);
  }, [columnName]);

  return (
    <S.ModalBG>
      <S.ModalContainer>
        <S.ModalHeader>
          <h1>{title}</h1>
          <div>
            <button onClick={onClickModalOption}>
              <Image src={optionDots} alt="3dot" width={32} height={32} />
            </button>
            <button onClick={onClickModalClose}>
              <Image src={closeX} alt="closeX" width={32} height={32} />
            </button>
            {renderedComponent}
          </div>
        </S.ModalHeader>
        <ToDoModalUser user={user} deadline={deadline} />
        <S.ModalContent>
          <S.ModalTag>
            <div>
              <h1></h1>
              <h2>{column}</h2>
            </div>
            <p>|</p>
            <ul>
              {tags && tags.map((tag, index) => <li key={index}>{tag}</li>)}
            </ul>
          </S.ModalTag>
          <S.ModalWords>{content}</S.ModalWords>
          <Image src={img || ""} alt="img" width={450} height={205} />
          <S.ModalCommentInput>
            <h3>댓글</h3>
            <div>
              <textarea
                placeholder="댓글 작성하기"
                value={comment}
                onChange={handleCommentChange}
              />
              <Button children="입력" onClick={handleCommentSubmit} />
            </div>
            <ToDoModalComment />
          </S.ModalCommentInput>
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalBG>
  );
};

export default ToDoModal;
