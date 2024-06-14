import { Injectable, inject } from '@angular/core';import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { Observable, map } from 'rxjs';
import { ScreenResponsiveService } from './screen-responsive.service';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private readonly screenResponsiveService = inject(ScreenResponsiveService);

  public readonly sidenavMode$: Observable<MatDrawerMode> = this.screenResponsiveService.isMobileDevice$.pipe(
    map(isMobileDevice => (isMobileDevice ? 'over' : 'side'))
  );

  public readonly sidenavIsOpened: boolean = window.innerWidth > 768;

  constructor() {}

  public onClickLink(drawer: MatDrawer) {
    if (drawer && this.screenResponsiveService.isMobileDevice$.value) {
      drawer.close();
    }
  }
}
