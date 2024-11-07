import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = false;
  private renderer: Renderer2;
  private rendererFactory2 = inject(RendererFactory2);

  constructor() {
    this.renderer = this.rendererFactory2.createRenderer(null, null);
    this.toggleTheme(false);
  }

  public toggleTheme(isDarkTheme?: boolean): void {
    this.isDarkTheme = isDarkTheme ?? !this.isDarkTheme;
    const themeClass = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    this.renderer.setAttribute(document.body, 'class', themeClass);
  }
}
