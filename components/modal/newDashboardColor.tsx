const ColorData = [
  {
    id: 1,
    backgroundColor: "--green-7AC555",
  },
  {
    id: 2,
    backgroundColor: "--purple-760DDE",
  },
  {
    id: 3,
    backgroundColor: "--orange-FFA500",
  },
  {
    id: 4,
    backgroundColor: " --blue-76A6EA",
  },
  {
    id: 5,
    backgroundColor: "--pink-E876EA",
  },
];

export default ColorData;

//모달창 호출 키워드

{
  /* <>
<Modal
  title="새로운 대시보드"
  submitButton="생성"
  cancelButton="취소"
  name="대시보드 이름"
  Placeholder="뉴프로젝트"
>
  <S.EllipseUl>
    {ColorData.map((color) => (
      <S.colorEllipseInner
        choiceColor={choiceColor}
        backgroundColor={color.backgroundColor}
      >
        <S.colorEllipse
          key={color.id}
          data-color={color.backgroundColor}
          backgroundColor={color.backgroundColor}
          onClick={handleColor}
        />
        {color && (
          <Image
            src={CHECKED_IMG}
            alt="컬러색상체크"
            // width={24}
            // height={24}
            fill
          />
        )}
      </S.colorEllipseInner>
    ))}
  </S.EllipseUl>
</Modal>

<Modal
  title="새 컬럼생성"
  name="이름"
  Placeholder="새로운 프로젝트"
  cancelButton="취소"
  submitButton="생성"
></Modal>

<Modal
  title="컬럼 관리"
  name="이름"
  Placeholder="Done"
  cancelButton="취소"
  submitButton="변경"
>
  <S.deleteText>삭제하기</S.deleteText>
</Modal>

<ModalCheckIt
  submitButton="확인"
  text="비밀번호가 일치하지 않습니다."
></ModalCheckIt>

<ModalCheckIt
  cancelButton="취소"
  submitButton="삭제"
  text="칼럼의 모든 카드가 삭제됩니다."
></ModalCheckIt>
</> */
}

// hanlde값. 언제든지 바뀔수 있음.

// const [choiceColor, setChoiceColor] = useState("");

// const handleColor = (e: any) => {
//   const colors = e.currentTarget.getAttribute("data-color");
//   setChoiceColor(colors);
// };
// const handleDelete = (e: any) => {
//   console.log("삭제하기버튼테스트");
// };
