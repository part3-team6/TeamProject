import { useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./styled";

interface ToDoModalUserProps {
  user: {
    name: string;
    image?: string;
  };
  deadline: string;
}

const ToDoModalUser: React.FC<ToDoModalUserProps> = ({ user, deadline }) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(deadline);
  }, [deadline]);

  return (
    <S.ToDoModalUser>
      <div>
        <h3>담당자</h3>
        <div>
          <S.ToDoImg>
            {user.image ? (
              <Image src={user?.image || ""} alt="img" fill />
            ) : (
              <div>{user.name.slice(0, 1).toUpperCase()}</div>
            )}
          </S.ToDoImg>
          <p>{user?.name}</p>
        </div>
      </div>
      <div>
        <h3>마감일</h3>
        <p>{date}</p>
      </div>
    </S.ToDoModalUser>
  );
};

export default ToDoModalUser;
