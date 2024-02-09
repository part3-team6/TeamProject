import * as S from "./styled";

interface TagProps {
  tags: string[];
}

function Tag({ tags }: TagProps) {
  return (
    <>
      {tags.map((tag, index) => (
        <S.tag key={tag + index} length={Math.ceil((tag.length % 4) + 1)}>
          <span>{tag}</span>
        </S.tag>
      ))}
    </>
  );
}

export default Tag;
