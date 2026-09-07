import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {
  private readonly formBuilder = inject(NonNullableFormBuilder);

  readonly isSubmitting = signal(false);
  readonly isSubmitted = signal(false);

  readonly loginForm = this.formBuilder.group({
    email: this.formBuilder.control('', {
      validators: [
        Validators.required,
        Validators.email
      ]
    }),

    password: this.formBuilder.control('', {
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    })
  });

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  hasError(
    controlName: 'email' | 'password',
    errorName: string
  ): boolean {
    const control = this.loginForm.controls[controlName];

    return control.hasError(errorName) &&
      (control.touched || this.isSubmitted());
  }

  onSubmit(): void {
    this.isSubmitted.set(true);

    if (this.loginForm.invalid || this.isSubmitting()) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    const credentials = this.loginForm.getRawValue();

    console.log('Login data:', credentials);

    // Later, call AuthService here:
    //
    // this.authService.login(credentials).subscribe({
    //   next: () => this.isSubmitting.set(false),
    //   error: () => this.isSubmitting.set(false)
    // });

    setTimeout(() => {
      this.isSubmitting.set(false);
    }, 500);
  }
}