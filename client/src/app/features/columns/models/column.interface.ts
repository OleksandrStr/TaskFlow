export const COLUMNS_FEATURE = 'columns';

export interface Column {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

export interface ColumnsState {
  columns: Column[];
}

export interface CreateColumnInfo {
  title: string;
  boardId: string;
}

export interface UpdateColumnInfo {
  columnId: string;
  fields: { title: string };
}
