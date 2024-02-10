import Image from "next/image";
import * as S from "./styled";
import Button from "./Button";
import { useState } from "react";

interface CommentProps {
  id: number;
  user: any;
  comment: any;
  onEditComment: (id: number, editedComment: string) => void;
  onDeleteComment: (id: number) => void;
}

// 이게 댓글 ui입니다.
const ToDoModalComment = ({
  id,
  user,
  comment,
  onEditComment,
  onDeleteComment,
}: CommentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.text || "");

  const handleEditComment = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    onEditComment(id, editedComment);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedComment(comment.text || "");
  };

  const handleDeleteComment = () => {
    onDeleteComment(id);
  };

  return (
    <S.ModalComment>
      <S.ModalCommentImg>
        <div>
          {user?.profileImageUrl ? (
            <Image src={user?.profileImageUrl || ""} alt="img" fill />
          ) : (
            <div>{user?.nickname.slice(0, 1).toUpperCase()}</div>
          )}
        </div>
      </S.ModalCommentImg>
      <S.ModalCommentContainer>
        <div>
          <h1>{user.nickname}</h1>
          <p>{comment.createdAt}</p>
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
            <span>{comment.content}</span>
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
