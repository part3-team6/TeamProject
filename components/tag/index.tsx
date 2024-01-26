import * as S from "./styled";

interface TagProps {
  tags: string;
  tagIndex: number;
}

function Tag({ tag, tagIndex }: TagProps) {
  return (
    <S.tag key={tagIndex} length={Math.ceil((tag.length % 4) + 1)}>
      <span>{tag}</span>
    </S.tag>
  );
}

export default Tag;
