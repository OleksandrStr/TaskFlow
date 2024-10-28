import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { BoardsService } from '../../services';

@Component({
  selector: 'boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BoardsComponent implements OnInit {
  boards$ = this.boardsService.getBoards();

  constructor(private boardsService: BoardsService) {}

  ngOnInit(): void {
    this.boardsService.loadBoards();
  }

  createBoard(title: string): void {
    this.boardsService.createBoard(title);
  }
}
