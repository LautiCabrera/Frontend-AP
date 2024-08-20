import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  private theme = 'dark';

  setTheme(theme: string) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  getTheme() {
    return this.theme;
  }
  
}