import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordInputComponent } from '../../../../components/password-input/password-input.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  imports: [PasswordInputComponent, ReactiveFormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
})
export class PasswordComponent {
  router = inject(Router);
  fb = inject(FormBuilder);

  passwordForm = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  navigateBack() {
    this.router.navigate(['/profile']);
  }

  sendForm() {
    console.log(this.passwordForm.controls);
  }
}
