import { NgModule } from '@angular/core';
import { BoardComponent } from './components';
import { RouterModule } from '@angular/router';
import { boardRoutes } from './board.routes';
import { BoardService } from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BOARD_FEATURE } from './models';
import { BoardEffects, BoardReducer } from './store';
import { BoardConnector } from './connectors';
import { SharedModule } from '@shared';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ColumnsModule } from '../columns';
import { TasksModule } from '../tasks';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ColumnsModule,
    TasksModule,
    RouterModule.forChild(boardRoutes),
    StoreModule.forFeature(BOARD_FEATURE, BoardReducer),
    EffectsModule.forFeature([BoardEffects]),
    ReactiveFormsModule,
  ],
  declarations: [BoardComponent],
  providers: [BoardService, BoardConnector],
})
export class BoardModule {}
