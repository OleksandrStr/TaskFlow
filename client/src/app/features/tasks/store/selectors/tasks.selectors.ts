import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TASKS_FEATURE, TasksState } from '../../models';

export const getTasksState = createFeatureSelector<TasksState>(TASKS_FEATURE);

export const getTasks = createSelector(getTasksState, (state) => state.tasks);
