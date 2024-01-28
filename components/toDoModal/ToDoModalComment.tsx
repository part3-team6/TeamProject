import Image from "next/image";
import * as S from "./styled";
import Button from "./Button";
import { useState } from "react";

interface CommentProps {
  id: number;
  user: {
    name: string;
    image?: string;
  };
  comment?: string;
  onEditComment: (id: number, editedComment: string) => void;
  onDeleteComment: (id: number) => void;
}

const ToDoModalComment = ({
  id,
  user,
  comment,
  onEditComment,
  onDeleteComment,
}: CommentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment || "");

  const handleEditComment = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEditComment(id, editedComment);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedComment(comment || "");
  };

  const handleDeleteComment = () => {
    onDeleteComment(id);
  };

  return (
    <S.ModalComment>
      <S.ModalCommentImg>
        <Image src="/images/chip+.svg" alt="img" width={20} height={20} />
      </S.ModalCommentImg>
      <S.ModalCommentContainer>
        <div>
          <h1>{user.name}</h1>
          <p>2022.12.27 14:00</p>
        </div>
        {isEditing ? (
          <S.ModalEditComment>
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
            <div>
              <Button onClick={handleSaveEdit}>저장</Button>
              <Button onClick={handleCancelEdit}>취소</Button>
            </div>
          </S.ModalEditComment>
        ) : (
          <div>
            <span>{comment}</span>
            <ul>
              <li onClick={handleEditComment}>수정</li>
              <li onClick={handleDeleteComment}>삭제</li>
            </ul>
          </div>
        )}
      </S.ModalCommentContainer>
    </S.ModalComment>
  );
};

export default ToDoModalComment;
