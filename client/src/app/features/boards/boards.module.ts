import { NgModule } from '@angular/core';
import { BoardComponent, BoardsComponent, TaskComponent } from './components';
import { RouterModule } from '@angular/router';
import { boardsRoutes } from './boards.routes';
import { BoardsService, TasksService } from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BOARDS_FEATURE } from './models';
import { BoardsEffects, BoardsReducer, TasksEffects } from './store';
import { BoardsConnector, TasksConnector } from './connectors';
import { SharedModule } from '@shared';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(boardsRoutes),
    StoreModule.forFeature(BOARDS_FEATURE, BoardsReducer),
    EffectsModule.forFeature([BoardsEffects, TasksEffects]),
    ReactiveFormsModule,
  ],
  declarations: [BoardsComponent, BoardComponent, TaskComponent],
  providers: [BoardsService, BoardsConnector, TasksService, TasksConnector],
})
export class BoardsModule {}
