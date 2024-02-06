import * as S from "./styled";

interface TagProps {
  tags: string;
  tagIndex: number;
}

function Tag({ tags, tagIndex }: TagProps) {
  return (
    <S.tag key={tagIndex} length={Math.ceil((tags.length % 4) + 1)}>
      <span>{tags}</span>
    </S.tag>
  );
}

export default Tag;
