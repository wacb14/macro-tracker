import { Component, inject } from '@angular/core';
import { PasswordInputComponent } from '../../../../components/password-input/password-input.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditFieldComponent } from '../../../../components/edit-field/edit-field.component';
import { BtnCancelBackComponent } from '../../../../components/btn-cancel-back/btn-cancel-back.component';

@Component({
  selector: 'app-password',
  imports: [
    PasswordInputComponent,
    ReactiveFormsModule,
    EditFieldComponent,
    BtnCancelBackComponent,
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css',
})
export class PasswordComponent {
  fb = inject(FormBuilder);

  passwordForm = this.fb.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  sendForm() {
    console.log(this.passwordForm.controls);
  }
}
