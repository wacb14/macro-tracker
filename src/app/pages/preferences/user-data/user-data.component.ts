import { Component, inject } from '@angular/core';
import { EditFieldComponent } from '../../../components/edit-field/edit-field.component';
import { BtnCancelBackComponent } from '../../../components/btn-cancel-back/btn-cancel-back.component';
import { InputSelectComponent } from '../../../components/input-select/input-select.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  imports: [
    EditFieldComponent,
    BtnCancelBackComponent,
    InputSelectComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css',
})
export class UserDataComponent {
  fb = inject(FormBuilder);

  genders = [
    { gender: 'Male', value: true },
    { gender: 'Female', value: false },
  ];
  months = [
    { name: 'January', value: 1 },
    { name: 'February', value: 2 },
    { name: 'March', value: 3 },
    { name: 'April', value: 4 },
    { name: 'May', value: 5 },
    { name: 'June', value: 6 },
    { name: 'July', value: 7 },
    { name: 'August', value: 8 },
    { name: 'September', value: 9 },
    { name: 'October', value: 10 },
    { name: 'November', value: 11 },
    { name: 'December', value: 12 },
  ];

  userDataForm = this.fb.group({
    gender: [null, Validators.required],
    month: [null, Validators.required],
  });

  sendForm() {
    // console.log(this.userDataForm.controls);
  }
}
