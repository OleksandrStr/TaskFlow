export interface CreateColumnPayload {
  title: string;
  boardId: string;
}

export interface Column {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}
