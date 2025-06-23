import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-cancel-back',
  imports: [],
  templateUrl: './btn-cancel-back.component.html',
  styleUrl: './btn-cancel-back.component.css',
})
export class BtnCancelBackComponent {
  router = inject(Router);
  routeBack = input.required<string>();

  navigateBack() {
    this.router.navigate([this.routeBack()]);
  }
}
