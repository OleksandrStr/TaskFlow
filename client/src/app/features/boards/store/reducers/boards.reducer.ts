import { createReducer, on } from '@ngrx/store';
import { BoardsActions, TasksActions } from '../actions';
import { BoardsState } from '../../models';

const initialBoardsState: BoardsState = {
  boards: null,
  currentBoard: null,
  currentColumns: null,
  currentTasks: null,
};

export const BoardsReducer = createReducer(
  initialBoardsState,
  on(BoardsActions.LoadBoardsSuccess, (state, { payload }) => ({
    ...state,
    boards: payload,
  })),
  on(BoardsActions.CreateBoardSuccess, (state, { payload }) => ({
    ...state,
    boards: [...state.boards, payload],
  })),
  on(BoardsActions.LoadBoardSuccess, (state, { payload }) => ({
    ...state,
    currentBoard: payload,
  })),
  on(BoardsActions.UpdateBoardSuccess, (state, { payload }) => ({
    ...state,
    currentBoard: payload,
  })),
  on(BoardsActions.DeleteBoardSuccess, (state, { payload }) => ({
    ...state,
    boards: state.boards.filter((board) => board.id !== payload),
  })),
  on(BoardsActions.LoadColumnsSuccess, (state, { payload }) => ({
    ...state,
    currentColumns: payload,
  })),
  on(BoardsActions.CreateColumnSuccess, (state, { payload }) => ({
    ...state,
    currentColumns: [...state.currentColumns, payload],
  })),
  on(BoardsActions.UpdateColumnSuccess, (state, { payload }) => ({
    ...state,
    currentColumns: state.currentColumns.map((column) =>
      column.id === payload.id ? payload : column
    ),
  })),
  on(BoardsActions.DeleteColumnSuccess, (state, { payload }) => ({
    ...state,
    currentColumns: state.currentColumns.filter(
      (column) => column.id !== payload
    ),
  })),
  on(TasksActions.LoadTasksSuccess, (state, { payload }) => ({
    ...state,
    currentTasks: payload,
  })),
  on(TasksActions.CreateTaskSuccess, (state, { payload }) => ({
    ...state,
    currentTasks: [...state.currentTasks, payload],
  })),
  on(TasksActions.UpdateTaskSuccess, (state, { payload }) => ({
    ...state,
    currentTasks: state.currentTasks.map((task) =>
      task.id === payload.id ? payload : task
    ),
  })),
  on(TasksActions.DeleteTaskSuccess, (state, { payload }) => ({
    ...state,
    currentTasks: state.currentTasks.filter((task) => task.id !== payload),
  }))
);
