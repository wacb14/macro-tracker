import { Component, inject } from '@angular/core';
import { EditFieldComponent } from '../../../../components/edit-field/edit-field.component';
import { BtnCancelBackComponent } from '../../../../components/btn-cancel-back/btn-cancel-back.component';

@Component({
  selector: 'app-name',
  imports: [EditFieldComponent, BtnCancelBackComponent],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css',
})
export class NameComponent {
}
