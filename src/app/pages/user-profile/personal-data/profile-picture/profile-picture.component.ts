import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { EditFieldComponent } from '../../../../components/edit-field/edit-field.component';

@Component({
  selector: 'app-profile-picture',
  imports: [NgClass, EditFieldComponent],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css',
})
export class ProfilePictureComponent {
  array = Array(10).fill(0);
  indexCurrentAvatar = 0;

  changeCurrentAvatar(index: number) {
    this.indexCurrentAvatar = index;
  }
}
