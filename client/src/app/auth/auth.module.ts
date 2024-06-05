import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

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
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, CommonModule],
  providers: [AuthService],
  declarations: [RegistrationComponent, LoginComponent],
})
export class AuthModule {}
