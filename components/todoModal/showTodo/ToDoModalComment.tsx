import Image from "next/image";
import * as S from "./styled";
import Button from "./Button";
import { useState } from "react";

interface CommentProps {
  id: number;
  user: any;
  comment: any;
  content: string;
  onEditComment: (id: any, editedComment: string) => void;
  onDeleteComment: (id: any) => void;
}

// 이게 댓글 ui입니다.
const ToDoModalComment = ({
  id,
  user,
  comment,
  content,
  onEditComment,
  onDeleteComment,
}: CommentProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.text || "");

  const handleEditComment = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (id: any, editedComment: string) => {
    onEditComment(id, editedComment);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedComment(comment.text || "");
  };

  const handleDeleteComment = (id: any) => {
    onDeleteComment(id);
  };
  const isoDateString = comment.createdAt;
  const date = new Date(isoDateString);

  const formattedDate =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2) +
    " " +
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

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
          <p>{formattedDate}</p>
        </div>
        {isEditing ? (
          <S.ModalEditComment>
            <textarea
              defaultValue={content}
              onChange={(e) => setEditedComment(e.target.value)}
            />
            <div>
              <Button
                onClick={() => {
                  handleSaveEdit(id, editedComment);
                }}
              >
                저장
              </Button>
              <Button onClick={handleCancelEdit}>취소</Button>
            </div>
          </S.ModalEditComment>
        ) : (
          <div>
            <span>{comment.content}</span>
            <ul>
              <li onClick={handleEditComment}>수정</li>
              <li onClick={() => handleDeleteComment(id)}>삭제</li>
            </ul>
          </div>
        )}
      </S.ModalCommentContainer>
    </S.ModalComment>
  );
};

export default ToDoModalComment;
