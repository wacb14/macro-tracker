import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
interface MenuElement {
  title: string;
  route: string;
}
@Component({
  selector: 'app-profile-menu',
  imports: [RouterLink],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.css',
})
export class ProfileMenuComponent {
  isOpen = false;
  @ViewChild('profileMenuContainer') profileMenuContainer!: ElementRef;
  sections: MenuElement[][] = [
    [
      { title: 'Profile', route: 'profile' },
      { title: 'Preferences', route: 'preferences' },
      { title: 'Settings', route: 'settings' },
    ],
    [{ title: 'Logout', route: '' }],
  ];

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (
      this.isOpen &&
      this.profileMenuContainer &&
      !this.profileMenuContainer.nativeElement.contains(event.target)
    ) {
      this.isOpen = false;
    }
  }
  openMenu() {
    this.isOpen = true;
  }
}
