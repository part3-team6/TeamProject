import Tag from "@/components/tag";

const ToDoModalTag = (props: { tags?: string[] | any }) => {
  const { tags } = props;

  return (
    <ul>
      <Tag tags={tags?.slice(0, 3)} />
      {tags.length > 3 && <li>+ {tags.length - 3}</li>}
    </ul>
  );
};

export default ToDoModalTag;
