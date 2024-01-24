import { useState } from "react";
import Image from "next/image";
import optionDots from "../public/images/3dot.svg";
import closeX from "../public/images/closeX.svg";
import Comment from "./Comment";

export default function ToDoModal({
  column = String,
  user = Object,
  title = String,
  description = String,
  deadline = Date,
  tag = String,
  img = File,
}) {
  const [] = useState();

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          <Image src={optionDots} alt="3dot" />
          <Image src={closeX} alt="closeX" />
        </div>
      </div>
      <div>
        <div>
          <h3>담당자</h3>
          <div>
            <Image src={} alt="img" />
            <p>{user.name}</p>
          </div>
        </div>
        <div>
          <h3>마감일</h3>
          <p>{deadline.toString()}</p>
        </div>
      </div>
      <div>
        <div>
          <h2>{column}</h2>
          <p>|</p>
          <ul>
            <li>{tag}</li>
          </ul>
        </div>
        <p>{description}</p>
        <Image src={img} alt="img" />
        <div>
          <h3>댓글</h3>
          <div>
            <input type="text" placeholder="댓글 작성하기" />
            <button>입력</button>
          </div>
          <div>
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
}
