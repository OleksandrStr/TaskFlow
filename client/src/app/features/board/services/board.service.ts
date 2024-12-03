import { Injectable } from '@angular/core';
import { BoardState, UpdateBoardInfo } from '../models';
import { Store } from '@ngrx/store';
import { BoardActions } from '../store/actions';
import { BoardSelectors } from '../store/selectors';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from '../../boards/models';

@Injectable()
export class BoardService {
  constructor(
    private store: Store<BoardState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  loadBoard(boardId: string): void {
    this.store.dispatch(BoardActions.LoadBoard({ payload: boardId }));
  }

  goToBoard(): void {
    const boardId =
      this.route.firstChild.firstChild.snapshot.paramMap.get('boardId');
    this.router.navigate(['boards', boardId]);
  }

  getCurrentBoard(): Observable<Board> {
    return this.store.select(BoardSelectors.getCurrentBoard);
  }

  updateBoard(updateBoardInfo: UpdateBoardInfo): void {
    this.store.dispatch(BoardActions.UpdateBoard({ payload: updateBoardInfo }));
  }

  cleanCurrentBoard(): void {
    this.store.dispatch(BoardActions.CleanCurrentBoard());
  }
}
