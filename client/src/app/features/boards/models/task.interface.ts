export interface Task {
  id: string;
  title: string;
  description?: string;
  columnId: string;
  boardId: string;
  userId: string;
}

export interface CreateTaskInfo {
  title: string;
  columnId: string;
  boardId: string;
}

export interface UpdateTaskInfo {
  taskId: string;
  fields: { title?: string; description?: string; columnId?: string };
}
