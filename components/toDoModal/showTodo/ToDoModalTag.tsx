import { useState } from "react";
import Button from "./Button";

const maxTagsToShow = 3; // 최대 표시할 태그 수
const maxTagLength = 6; // 각 태그의 최대 길이

const ToDoModalTag = (props: { tags?: string[] }) => {
  const [moreTags, setMoreTags] = useState(false);
  const { tags } = props;

  const onClickMoreTag = () => {
    setMoreTags((prev) => !prev);
  };

  return (
    <ul>
      {tags &&
        tags
          .slice(0, moreTags ? tags.length : maxTagsToShow)
          .map((tag, index) => (
            <li key={index}>
              {tag.length > maxTagLength
                ? `${tag.substring(0, maxTagLength)}...`
                : tag}
            </li>
          ))}
      {tags && tags.length > maxTagsToShow && (
        <li>
          <Button onClick={onClickMoreTag}>
            {moreTags ? "- 숨기기" : `+ ${tags.length - maxTagsToShow}개`}
          </Button>
        </li>
      )}
    </ul>
  );
};

export default ToDoModalTag;
