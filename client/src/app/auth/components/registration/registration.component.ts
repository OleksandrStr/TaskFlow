import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-registration',
  templateUrl: './registration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    this.authService.register(this.form.value);
  }
}
