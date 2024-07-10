import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    this.authService.login(this.form.value);
  }
}
