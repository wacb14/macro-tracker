import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() isHiddenMenu!: WritableSignal<boolean>;
  toggleMenu() {
    this.isHiddenMenu.update((t) => !t);
  }
}
