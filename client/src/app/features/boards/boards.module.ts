import { NgModule } from '@angular/core';
import { BoardComponent, BoardsComponent } from './components';
import { RouterModule } from '@angular/router';
import { boardsRoutes } from './boards.routes';
import { BoardsService } from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BOARDS_FEATURE } from './models';
import { BoardsEffects, BoardsReducer } from './store';
import { BoardsConnector } from './connectors';
import { SharedModule } from '@shared';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(boardsRoutes),
    StoreModule.forFeature(BOARDS_FEATURE, BoardsReducer),
    EffectsModule.forFeature([BoardsEffects]),
  ],
  declarations: [BoardsComponent, BoardComponent],
  providers: [BoardsService, BoardsConnector],
})
export class BoardsModule {}