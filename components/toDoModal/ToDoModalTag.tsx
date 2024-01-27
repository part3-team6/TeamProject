const maxTagsToShow = 4; // 최대 표시할 태그 수
const maxTagLength = 10; // 각 태그의 최대 길이

const ToDoModalTag = (props: { tags?: string[] }) => {
  const { tags } = props;

  return (
    <ul>
      {tags &&
        tags
          .slice(0, maxTagsToShow)
          .map((tag, index) => (
            <li key={index}>
              {tag.length > maxTagLength
                ? `${tag.substring(0, maxTagLength)}...`
                : tag}
            </li>
          ))}
      {tags && tags.length > maxTagsToShow && (
        <li>그 외 {tags.length - maxTagsToShow}개</li>
      )}
    </ul>
  );
};

export default ToDoModalTag;
