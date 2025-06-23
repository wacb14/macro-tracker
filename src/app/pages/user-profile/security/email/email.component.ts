import { Component } from '@angular/core';
import { EditFieldComponent } from '../../../../components/edit-field/edit-field.component';
import { BtnCancelBackComponent } from '../../../../components/btn-cancel-back/btn-cancel-back.component';

@Component({
  selector: 'app-email',
  imports: [EditFieldComponent, BtnCancelBackComponent],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css',
})
export class EmailComponent {}
