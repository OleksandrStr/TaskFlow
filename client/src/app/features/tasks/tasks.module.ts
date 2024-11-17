import { NgModule } from '@angular/core';
import { TaskComponent } from './components';
import { TasksService } from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TASKS_FEATURE } from './models';
import { TasksEffects, TasksReducer } from './store';
import { TasksConnector } from './connectors';
import { SharedModule } from '@shared';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(TASKS_FEATURE, TasksReducer),
    EffectsModule.forFeature([TasksEffects]),
  ],
  declarations: [TaskComponent],
  providers: [TasksService, TasksConnector],
})
export class TasksModule {}
