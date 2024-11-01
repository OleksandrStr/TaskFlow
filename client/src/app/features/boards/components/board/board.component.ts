import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardsService } from '../../services';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent implements OnInit {
  boardId = this.route.snapshot.paramMap.get('boardId');
  board$ = this.boardsService.getCurrentBoard();

  constructor(
    private boardsService: BoardsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.boardsService.loadBoard(this.boardId);
  }
}
