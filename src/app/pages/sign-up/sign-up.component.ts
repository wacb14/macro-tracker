import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private themeService = inject(ThemeService);

  getTheme() {
    return this.themeService.getTheme();
  }
}
