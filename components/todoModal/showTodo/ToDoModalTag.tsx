import Tag from "@/components/tag";
import { useState } from "react";

const ToDoModalTag = (props: { tags?: string[] | any }) => {
  const { tags } = props;
  const [tagsMore, setTagsMore] = useState<boolean>(false);

  return (
    <ul>
      <Tag tags={tagsMore ? tags : tags?.slice(0, 3)} />
      {tags.length > 3 &&
        (tagsMore ? (
          <li onClick={() => setTagsMore(false)}>접기</li>
        ) : (
          <li onClick={() => setTagsMore(true)}>+ {tags.length - 3}</li>
        ))}
    </ul>
  );
};

export default ToDoModalTag;
