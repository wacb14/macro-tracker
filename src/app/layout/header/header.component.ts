import { Component, Input, WritableSignal } from '@angular/core';
import { NotificationsComponent } from '../../components/notifications/notifications.component';

@Component({
  selector: 'app-header',
  imports: [NotificationsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() isHiddenMenu!: WritableSignal<boolean>;
  toggleMenu() {
    this.isHiddenMenu.update((t) => !t);
  }
}
