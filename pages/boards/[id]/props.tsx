export interface ColumnsProps {
  result: string;
  data: ColumnProps[];
}

export interface ColumnProps {
  id: number;
  title: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CardsProps {
  cursorId?: number;
  totalCount?: number;
  cards: CardProps[];
}

export interface CardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    porfileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl?: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface NewCard {
  assigneeUserId: number;
  dashboardId: number;
  columnId: number;
  title: string;
  description: string;
  dueDate: string;
  tags: string[];
  imageUrl?: string;
}

export interface ModalProps {
  columnName: string;
  user: {
    name: string;
    image?: string;
  };
  title: string;
  content: string;
  deadline: string;
  tags?: string[];
  img?: string;
}
