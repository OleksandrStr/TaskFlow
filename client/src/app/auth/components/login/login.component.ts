import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private subscriptions = new Subscription();

  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    const loginSub = this.authService.login(this.form.value).subscribe({
      next: (currentUser) => {
        this.authService.setCurrentUser(currentUser);
        this.authService.setToken(currentUser);
        this.errorMessage = '';
        this.router.navigateByUrl('/');
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.error.error;
      },
    });

    this.subscriptions.add(loginSub);
  }
}
