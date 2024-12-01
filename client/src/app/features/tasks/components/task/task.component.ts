import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';
import { TasksService } from '../../services';
import { FormBuilder } from '@angular/forms';
import { Task } from '../../models';
import { ColumnsService } from '../../../columns';
import { BoardService } from '../../../board/services';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TaskComponent implements OnInit {
  @HostBinding('class') class = 'task-container';

  task$: Observable<Task>;
  columns$ = this.columnsService.getColumns();
  columnForm = this.fb.group({
    columnId: [null],
  });

  taskId = this.route.snapshot.paramMap.get('taskId');

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private columnsService: ColumnsService,
    private tasksService: TasksService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.task$ = this.tasksService.getTasks().pipe(
      map((tasks) => tasks?.find((task) => task.id === this.taskId)),
      filter(Boolean),
      tap((task) => this.columnForm.patchValue({ columnId: task.columnId }))
    );
  }

  goToBoard(): void {
    this.boardService.goToBoard();
  }

  updateTaskTitle(title: string): void {
    const updateTaskInfo = {
      taskId: this.taskId,
      fields: { title },
    };
    this.tasksService.updateTask(updateTaskInfo);
  }

  updateTaskColumn(columnId: string, currentColumnId: string): void {
    if (columnId !== currentColumnId) {
      const updateTaskInfo = {
        taskId: this.taskId,
        fields: { columnId },
      };
      this.tasksService.updateTask(updateTaskInfo);
    }
  }

  updateTaskDescription(description: string): void {
    const updateTaskInfo = {
      taskId: this.taskId,
      fields: { description },
    };
    this.tasksService.updateTask(updateTaskInfo);
  }

  deleteTask(): void {
    this.tasksService.deleteTask(this.taskId);
  }
}
