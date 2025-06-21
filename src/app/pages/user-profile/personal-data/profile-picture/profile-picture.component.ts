import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-picture',
  imports: [NgClass],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.css',
})
export class ProfilePictureComponent {
  router = inject(Router);
  array = Array(10).fill(0);
  indexCurrentAvatar = 0;

  changeCurrentAvatar(index: number) {
    this.indexCurrentAvatar = index;
  }
  navigateBack() {
    this.router.navigate(['/profile']);
  }
}
