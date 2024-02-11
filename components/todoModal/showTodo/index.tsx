import { ReactElement, useEffect, useState } from "react";
import Button from "./Button";
import ToDoModalComment from "./ToDoModalComment";
import ToDoModalOption from "./ToDoModalOption";
import ToDoModalTag from "./ToDoModalTag";
import ToDoModalUser from "./ToDoModalUser";
import Image from "next/image";
import * as S from "./styled";
import { useTodoModalStore } from "@/store/todoModal";
import { ModalProps } from "@/public/prop/props";
import axios from "@/lib/axios";
import { useRouter } from "next/router";

const ToDoModal = ({
  columnName,
  user,
  title,
  content,
  deadline,
  tags,
  img,
  cardid,
  columnId,
  selectedCard,
}: ModalProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [commentLists, setCommnetLists] = useState<any>(null); // 이게 댓글 api 따오는겁니다.
  const [column, setColumn] = useState("");
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<{ text: string; time: string }[]>(
    [],
  );
  const [renderedOption, setRenderedOption] = useState<ReactElement | null>(
    null,
  );
  const { setIsEditCardOpen, setIsShowCardOpen } = useTodoModalStore();
  // console.log(comments);
  console.log(comment);

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

  // 값 확인하는건데 나중에 지우시면됩니다.
  // console.log(comment, cardid, columnId, id);

  // 댓글 생성기능. 댓글 ui는 api 따로 있습니다. 그걸로 ui그려야하는데 ui잡기엔 시간이 부족해서 우선 생성기능만 만들게요
  const commnetNew = async () => {
    try {
      const response = await axios.post(`comments`, {
        content: comment,
        cardId: cardid,
        columnId: columnId,
        dashboardId: Number(id),
      });
      // 이 밑에 commentList();이 함수는 댓글 목록조회인데 잘 실행되는지 우선 넣어봤는데 정상작동함.
      // 필요한 데이터 빼내서 ui그리시면 됩니다 commentList();이 함수로 (콘솔까지 찍어둿으니 테스트해보실려면
      // 댓글 하나 생성해보시면 바로 알수있습니다.)
      commentList();
      console.log("댓글 보낼때POST", response);
      setComment("");
    } catch (error: any) {
      console.error("댓글 생성에러", error);
    }
  };

  const commentList = async () => {
    try {
      const response = await axios.get(`comments?size=10&cardId=${cardid}`);
      setCommnetLists(response.data.comments);
      console.log("댓글목록GET", response);
    } catch (error: any) {
      console.error("댓글 목록 조회 에러", error);
    }
  };

  // onClick에서 이거 빼고 위에 댓글생성기능 넣은건데 나중에 확인해보고 빼야합니다.
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
  // 여기까지에요 댓글생성기능빼놓은거

  const onClickModalOption = (cardid: any) => {
    if (renderedOption) {
      setRenderedOption(null);
    } else {
      setRenderedOption(
        <ToDoModalOption
          closeShowCardModal={closeShowCardModal}
          id={cardid}
          columnId={columnId}
          openEditCardModal={openEditCardModal}
          selectedCard={selectedCard}
        />,
      );
    }
  };

  const handleEditComment = async (id: any, editedComment: string) => {
    const edit = {
      content: editedComment,
    };
    try {
      const res = await axios.put(`/comments/${id}`, edit);
      commentList();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteComment = async (id: any) => {
    try {
      const res = await axios.delete(`/comments/${id}`);
      commentList();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    commentList();
  }, []);

  useEffect(() => {
    setColumn(columnName);
  }, [columnName]);
  console.log("여기 봐야합니다", commentLists);
  return (
    <S.ModalBG>
      <S.ModalContainer>
        <S.ModalHeader>
          <h1>{title}</h1>
          <div>
            <button onClick={() => onClickModalOption(cardid)}>
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
            {img ? <Image src={img} alt="이미지" fill /> : ""}
          </S.ModalContentImage>
          <S.ModalCommentInput>
            <h3>댓글</h3>
            <div>
              <textarea
                placeholder="댓글 작성하기"
                value={comment}
                onChange={handleCommentChange}
              />
              <Button children="입력" onClick={commnetNew} />
            </div>
            <ul>
              {commentLists?.map((commentItem: any, index: any) => (
                <ToDoModalComment
                  key={index}
                  id={commentItem.id}
                  user={commentItem.author}
                  comment={commentItem}
                  content={commentItem.content}
                  onEditComment={handleEditComment}
                  onDeleteComment={handleDeleteComment}
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
