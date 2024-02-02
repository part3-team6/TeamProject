import * as S from "./styled";

interface TagProps {
  tags: string[];
}

function Tag({ tags }: TagProps) {
  return (
    <div>
      {tags.map((tag, tagIndex) => (
        <S.tag key={tagIndex} length={Math.ceil((tags.length % 4) + 1)}>
          <span>{tag}</span>
        </S.tag>
      ))}
    </div>
  );
}

export default Tag;
