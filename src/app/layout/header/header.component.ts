import { Component, Input, WritableSignal } from '@angular/core';
import { NotificationsComponent } from '../../components/notifications/notifications.component';
import { ProfileMenuComponent } from "../../components/profile-menu/profile-menu.component";

@Component({
  selector: 'app-header',
  imports: [NotificationsComponent, ProfileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() isHiddenMenu!: WritableSignal<boolean>;
  toggleMenu() {
    this.isHiddenMenu.update((t) => !t);
  }
}
