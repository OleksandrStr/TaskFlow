import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreModule } from '@ngrx/store';
import { AUTH_FEATURE, AuthReducer } from './store/reducers/auth.reducer';

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
    EffectsModule.forFeature(AuthEffects),
  ],
  providers: [AuthService, AuthGuard],
  declarations: [RegistrationComponent, LoginComponent],
})
export class AuthModule {}
