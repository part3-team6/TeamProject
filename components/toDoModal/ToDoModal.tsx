import { ReactElement, useEffect, useState } from "react";
import Button from "./Button";
import closeX from "../../public/images/closeX.svg";
import Image from "next/image";
import optionDots from "../../public/images/3dot.svg";
import ToDoModalComment from "./ToDoModalComment";
import ToDoModalOption from "./ToDoModalOption";
import ToDoModalTag from "./ToDoModalTag";
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
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<{ text: string; time: string }[]>(
    [],
  );
  const [renderedOption, setRenderedOption] = useState<ReactElement | null>(
    null,
  );

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    try {
      const currentTime = new Date().toLocaleString();
      const newComment = {
        text: comment,
        time: currentTime,
      };

      setComments((prevComments: { text: string; time: string }[]) => [
        ...prevComments,
        newComment,
      ]);
    } catch (err) {
      console.log("댓글 추가 중 오류 발생", err);
    }

    setComment("");
  };

  const onClickModalOption = () => {
    if (renderedOption) {
      setRenderedOption(null);
    } else {
      setRenderedOption(<ToDoModalOption />);
    }
  };

  const onClickModalClose = () => {
    return;
  };

  const handleEditComment = (id: number, editedComment: string) => {
    setComments((prevComments) => {
      return prevComments.map((comment, i) =>
        i === id ? { ...comment, text: editedComment } : comment,
      );
    });
  };

  const handleDeleteComment = (id: number) => {
    const updatedComments = [...comments];
    updatedComments.splice(id, 1);
    setComments(updatedComments);
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
            {renderedOption}
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
            <ToDoModalTag tags={tags} />
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
            <ul>
              {comments.map((commentItem, index) => (
                <ToDoModalComment
                  key={index}
                  id={index}
                  user={user}
                  comment={commentItem}
                  onEditComment={handleEditComment}
                  onDeleteComment={() => handleDeleteComment(index)}
                />
              ))}
            </ul>
          </S.ModalCommentInput>
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalBG>
  );
};

export default ToDoModal;