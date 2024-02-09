import { ReactElement, useEffect, useState } from "react";
import Button from "./Button";
import ToDoModalComment from "./ToDoModalComment";
import ToDoModalOption from "./ToDoModalOption";
import ToDoModalTag from "./ToDoModalTag";
import ToDoModalUser from "./ToDoModalUser";
import Image from "next/image";
import * as S from "./styled";
import { useTodoModalStore } from "@/store/todoModal";
import { ModalProps } from "@/pages/boards/[id]/props";

const ToDoModal = ({
  columnName,
  user,
  title,
  content,
  deadline,
  tags,
  img,
}: ModalProps) => {
  const [column, setColumn] = useState("");
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<{ text: string; time: string }[]>(
    [],
  );
  const [renderedOption, setRenderedOption] = useState<ReactElement | null>(
    null,
  );
  const { setIsEditCardOpen, setIsShowCardOpen } = useTodoModalStore();

  // Card Edit 모달
  const openEditCardModal = () => {
    setIsEditCardOpen(true);
  };

  // Card 상세보기 닫기
  const closeShowCardModal = () => {
    setIsShowCardOpen(false);
  };

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
      openEditCardModal();
      setRenderedOption(<ToDoModalOption />);
    }
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
              <Image src={"/images/3dot.svg"} alt="3dot" fill />
            </button>
            <button onClick={closeShowCardModal}>
              <Image src={"/images/closeX.svg"} alt="closeX" fill />
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
          <S.ModalContentImage>
            <Image src={img || ""} alt="img" fill />
          </S.ModalContentImage>
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
