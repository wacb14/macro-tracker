import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  imports: [],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css',
})
export class EmailComponent {
  router = inject(Router);

  navigateBack() {
    this.router.navigate(['/profile']);
  }
}
