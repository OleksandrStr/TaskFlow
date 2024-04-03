import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'register',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [AuthService],
  declarations: [RegistrationComponent],
})
export class AuthModule {}
