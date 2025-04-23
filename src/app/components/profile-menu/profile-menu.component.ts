import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  imports: [],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.css',
})
export class ProfileMenuComponent {
  isOpen = false;
  @ViewChild('profileMenuContainer') profileMenuContainer!: ElementRef;

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
