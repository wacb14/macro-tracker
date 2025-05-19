import { Component, inject, Input, WritableSignal } from '@angular/core';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { ProfileMenuComponent } from '../../components/profile-menu/profile-menu.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [NotificationsComponent, ProfileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  @Input() isHiddenMenu!: WritableSignal<boolean>;
  toggleMenu() {
    this.isHiddenMenu.update((t) => !t);
  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
  getTheme() {
    return this.themeService.getTheme();
  }
}
