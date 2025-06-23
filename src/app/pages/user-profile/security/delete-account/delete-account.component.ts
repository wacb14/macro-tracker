import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordInputComponent } from '../../../../components/password-input/password-input.component';

@Component({
  selector: 'app-delete-account',
  imports: [PasswordInputComponent],
  templateUrl: './delete-account.component.html',
  styleUrl: './delete-account.component.css',
})
export class DeleteAccountComponent {
  router = inject(Router);

  navigateBack() {
    this.router.navigate(['/profile']);
  }
}
