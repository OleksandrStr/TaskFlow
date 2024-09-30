import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, RegistrationComponent } from './components';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE } from './models';
import { AuthEffects, AuthReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './guards';
import { AuthConnector } from './connectors';

const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE, AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthConnector, AuthGuard],
  declarations: [RegistrationComponent, LoginComponent],
})
export class AuthModule {}
