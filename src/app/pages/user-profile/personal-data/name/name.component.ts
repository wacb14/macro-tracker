import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  imports: [],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css',
})
export class NameComponent {
  router = inject(Router);
  navigateBack() {
    this.router.navigate(['/profile']);
  }
}
