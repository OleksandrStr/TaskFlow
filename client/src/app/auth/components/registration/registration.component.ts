import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'auth-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {}

  constructor(private fb: FormBuilder) {}
}
