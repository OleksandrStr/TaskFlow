import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from '../../services';
import { ColumnInput } from '../../models';

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

  createColumn(title: string): void {
    const columnInput: ColumnInput = {
      title,
      boardId: this.boardId,
    };
    this.boardsService.createColumn(columnInput);
  }
}
