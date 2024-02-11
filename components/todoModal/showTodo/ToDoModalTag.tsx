import Tag from "@/components/tag";
import { useState } from "react";

const ToDoModalTag = (props: { tags?: string[] | any }) => {
  const { tags } = props;
  const [tagsMore, setTagsMore] = useState<boolean>(false);

  return (
    <ul>
      <Tag tags={tagsMore ? tags : tags?.slice(0, 3)} />
      {!tagsMore && tags.length > 3 ? (
        <li onClick={() => setTagsMore(true)}>+ {tags.length - 3}</li>
      ) : (
        <button onClick={() => setTagsMore(false)}>접기</button>
      )}
    </ul>
  );
};

export default ToDoModalTag;
