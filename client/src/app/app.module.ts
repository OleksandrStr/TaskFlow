import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthModule } from './features/auth';

const storeDevtools: ModuleWithProviders<StoreDevtoolsModule> | [] =
  environment.production ? [] : StoreDevtoolsModule.instrument();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    storeDevtools,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
