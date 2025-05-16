// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeKey = 'theme';
  private currentTheme: 'light' | 'dark';

  constructor() {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === 'light' || savedTheme === 'dark')
      this.currentTheme = savedTheme;
    else {
      // Detect system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
    }
    this.applyTheme();
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(this.themeKey, this.currentTheme);
    this.applyTheme();
  }

  private applyTheme(): void {
    const htmlElement = document.documentElement;
    if (this.currentTheme === 'dark') htmlElement.classList.add('dark');
    else htmlElement.classList.remove('dark');
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }
}
