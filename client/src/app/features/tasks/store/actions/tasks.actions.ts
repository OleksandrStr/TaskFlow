import { createAction, props } from '@ngrx/store';
import { Task, CreateTaskInfo, UpdateTaskInfo } from '../../models';

const LOAD_TASKS = '[Tasks] Load Tasks';
const LOAD_TASKS_SUCCESS = '[Tasks] Load Tasks Success';

const CREATE_TASK = '[Tasks] Create Task';
const CREATE_TASK_SUCCESS = '[Tasks] Create Task Success';

const UPDATE_TASK = '[Tasks] Update Task';
const UPDATE_TASK_SUCCESS = '[Tasks] Update Task Success';

const DELETE_TASK = '[Tasks] Delete Task';
const DELETE_TASK_SUCCESS = '[Tasks] Delete Task Success';

export const LoadTasks = createAction(LOAD_TASKS, props<{ payload: string }>());
export const LoadTasksSuccess = createAction(
  LOAD_TASKS_SUCCESS,
  props<{ payload: Task[] }>()
);

export const CreateTask = createAction(
  CREATE_TASK,
  props<{ payload: CreateTaskInfo }>()
);
export const CreateTaskSuccess = createAction(
  CREATE_TASK_SUCCESS,
  props<{ payload: Task }>()
);

export const UpdateTask = createAction(
  UPDATE_TASK,
  props<{ payload: UpdateTaskInfo }>()
);
export const UpdateTaskSuccess = createAction(
  UPDATE_TASK_SUCCESS,
  props<{ payload: Task }>()
);

export const DeleteTask = createAction(
  DELETE_TASK,
  props<{ payload: string }>()
);
export const DeleteTaskSuccess = createAction(
  DELETE_TASK_SUCCESS,
  props<{ payload: string }>()
);
