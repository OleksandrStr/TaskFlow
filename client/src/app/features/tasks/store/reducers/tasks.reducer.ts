import { createReducer, on } from '@ngrx/store';
import { TasksActions } from '../actions';
import { TasksState } from '../../models';

export const initialTasksState: TasksState = {
  tasks: null,
};

export const TasksReducer = createReducer(
  initialTasksState,
  on(TasksActions.LoadTasksSuccess, (state, { payload }) => ({
    ...state,
    tasks: payload,
  })),
  on(TasksActions.CreateTaskSuccess, (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, payload],
  })),
  on(TasksActions.UpdateTaskSuccess, (state, { payload }) => ({
    ...state,
    tasks: state.tasks.map((task) => (task.id === payload.id ? payload : task)),
  })),
  on(TasksActions.DeleteTaskSuccess, (state, { payload }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== payload),
  }))
);
