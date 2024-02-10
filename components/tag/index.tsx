import * as S from "./styled";

interface TagProps {
  tags: string[];
  removeTag?: any;
}

function Tag({ tags, removeTag }: TagProps) {
  return (
    <>
      {tags.map((tag, index) => (
        <>
          <S.tag key={tag + index} length={Math.ceil((tag.length % 4) + 1)}>
            <span>{tag}</span>
          </S.tag>
          {removeTag && <S.Delete onClick={() => removeTag(index)}>X</S.Delete>}
        </>
      ))}
    </>
  );
}

export default Tag;
