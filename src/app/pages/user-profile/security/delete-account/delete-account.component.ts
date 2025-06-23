import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordInputComponent } from '../../../../components/password-input/password-input.component';
import { EditFieldComponent } from '../../../../components/edit-field/edit-field.component';
import { BtnCancelBackComponent } from '../../../../components/btn-cancel-back/btn-cancel-back.component';

@Component({
  selector: 'app-delete-account',
  imports: [PasswordInputComponent, EditFieldComponent, BtnCancelBackComponent],

  templateUrl: './delete-account.component.html',
  styleUrl: './delete-account.component.css',
})
export class DeleteAccountComponent {
  router = inject(Router);

  navigateBack() {
    this.router.navigate(['/profile']);
  }
}
