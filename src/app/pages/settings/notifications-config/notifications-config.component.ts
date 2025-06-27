import { Component, inject } from '@angular/core';
import { EditFieldComponent } from '../../../components/edit-field/edit-field.component';
import { BtnCancelBackComponent } from '../../../components/btn-cancel-back/btn-cancel-back.component';
import { ToggleSwitchComponent } from '../../../components/toggle-switch/toggle-switch.component';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notifications-config',
  imports: [
    EditFieldComponent,
    BtnCancelBackComponent,
    ToggleSwitchComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './notifications-config.component.html',
  styleUrl: './notifications-config.component.css',
})
export class NotificationsConfigComponent {
  fb = inject(FormBuilder);
  notificationsForm = this.fb.group({
    hydration: [true, Validators.required],
    goals: [false, Validators.required],
    calories: [false, Validators.required],
    proteins: [false, Validators.required],
    carbs: [false, Validators.required],
    fats: [false, Validators.required],
  });
  getFormControl(name: string): AbstractControl | null {
    if (name) return this.notificationsForm.get(name);
    return null;
  }
  isEnabled(name: string): boolean {
    return this.getFormControl(name)?.value;
  }
  sendForm() {
    console.log(this.notificationsForm.controls);
  }
}
