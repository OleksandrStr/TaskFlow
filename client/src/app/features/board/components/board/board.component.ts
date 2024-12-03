import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../../services';
import { ColumnsService } from '../../../columns';
import { Task, CreateTaskInfo, TasksService } from '../../../tasks';
import { BoardsService } from '../../../boards/services';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BoardComponent implements OnInit, OnDestroy {
  boardId = this.route.snapshot.paramMap.get('boardId');
  board$ = this.boardService.getCurrentBoard();
  columns$ = this.columnsService.getColumns();
  tasks$ = this.tasksService.getTasks();

  constructor(
    private boardsService: BoardsService,
    private boardService: BoardService,
    private columnsService: ColumnsService,
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.boardService.loadBoard(this.boardId);
    this.columnsService.loadColumns(this.boardId);
    this.tasksService.loadTasks(this.boardId);
  }

  ngOnDestroy(): void {
    this.boardService.cleanCurrentBoard();
  }

  updateBoardTitle(title: string): void {
    this.boardService.updateBoard({
      boardId: this.boardId,
      fields: { title },
    });
  }

  deleteBoard(): void {
    if (confirm('Are you sure you want to delete the board?')) {
      this.boardsService.deleteBoard(this.boardId);
    }
  }

  createColumn(title: string): void {
    const createColumnInfo = {
      title,
      boardId: this.boardId,
    };
    this.columnsService.createColumn(createColumnInfo);
  }

  updateColumnTitle(title: string, columnId: string): void {
    const updateColumnInfo = {
      columnId,
      fields: { title },
    };
    this.columnsService.updateColumn(updateColumnInfo);
  }

  deleteColumn(columnId: string): void {
    this.columnsService.deleteColumn(columnId);
  }

  getTasksByColumn(tasks: Task[], columnId: string): Task[] {
    return tasks?.filter((task) => task.columnId === columnId);
  }

  openTask(taskId: string): void {
    this.router.navigate(['boards', this.boardId, 'tasks', taskId]);
  }

  createTask(title: string, columnId: string): void {
    const createTaskInfo: CreateTaskInfo = {
      title,
      boardId: this.boardId,
      columnId,
    };
    this.tasksService.createTask(createTaskInfo);
  }
}
