import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeModule } from './features/home/home.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { AuthModule } from './features/auth/auth.module';
import { AuthInterceptor } from './features/auth/interceptors/auth.interceptor';

const storeDevtools: ModuleWithProviders<StoreDevtoolsModule> | [] =
  environment.production ? [] : StoreDevtoolsModule.instrument();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    storeDevtools,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
