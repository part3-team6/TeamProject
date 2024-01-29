import Button from "./Button";
import * as S from "./styled";

const onClickModify = () => {
  console.log(`modify button clicked`);
};

const onClickDelete = () => {
  console.log(`delete button clicked`);
};

const toDoModalOption = () => {
  return (
    <S.ModalOption>
      <div>
        <Button children="수정하기" onClick={onClickModify} />
        <Button children="삭제하기" onClick={onClickDelete} />
      </div>
    </S.ModalOption>
  );
};

export default toDoModalOption;
