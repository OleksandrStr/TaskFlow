import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { COLUMNS_FEATURE } from './models';
import { ColumnsEffects, ColumnsReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { ColumnsService } from './services';
import { ColumnsConnector } from './connectors';

@NgModule({
  imports: [
    StoreModule.forFeature(COLUMNS_FEATURE, ColumnsReducer),
    EffectsModule.forFeature([ColumnsEffects]),
  ],
  providers: [ColumnsService, ColumnsConnector],
})
export class ColumnsModule {}
