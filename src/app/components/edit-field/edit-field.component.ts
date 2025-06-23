import { Component, inject, input, output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-field',
  imports: [],
  templateUrl: './edit-field.component.html',
  styleUrl: './edit-field.component.css',
})
export class EditFieldComponent {
  router = inject(Router);

  title = input.required<string>();
  routeBack = input.required<string>();

  navigateBack() {
    this.router.navigate([this.routeBack()]);
  }
}
