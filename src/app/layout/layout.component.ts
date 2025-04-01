import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  isMobile = window.innerWidth <= 768;
  isHiddenMenu = signal(this.isMobile);

  @HostListener('window:resize')
  onResize() {
    // Verify again
    this.isMobile=window.innerWidth <= 768;
    this.isHiddenMenu.set(this.isMobile);
  }
}
