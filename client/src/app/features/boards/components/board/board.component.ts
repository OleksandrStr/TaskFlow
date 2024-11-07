import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from '../../services';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BoardComponent implements OnInit {
  boardId = this.route.snapshot.paramMap.get('boardId');
  board$ = this.boardsService.getCurrentBoard();
  columns$ = this.boardsService.getCurrentColumns();

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.boardsService.loadBoard(this.boardId);
    this.boardsService.loadColumns(this.boardId);
  }

  updateBoardTitle(title: string): void {
    this.boardsService.updateBoard({
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
    this.boardsService.createColumn(createColumnInfo);
  }

  updateColumnTitle(title: string, columnId: string): void {
    const updateColumnInfo = {
      columnId,
      fields: { title },
    };
    this.boardsService.updateColumn(updateColumnInfo);
  }

  deleteColumn(columnId: string): void {
    this.boardsService.deleteColumn(columnId);
  }
}
