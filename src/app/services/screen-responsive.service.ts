import { Injectable } from '@angular/core';
import { BehaviorSubject, debounceTime, fromEvent, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenResponsiveService {
  constructor() {
    fromEvent(window, 'resize')
      .pipe(debounceTime(200))
      .subscribe(() => this.isMobileDevice$.next(this.isMobileDevice));
  }

  public readonly isMobileDevice$: BehaviorSubject<boolean> = new BehaviorSubject(this.isMobileDevice);
  public readonly contentClassList$ = this.isMobileDevice$.pipe(map(isMobileDevice => (isMobileDevice ? ['px-4'] : ['px-8'])));

  private get isMobileDevice(): boolean {
    return window.innerWidth < 768;
  }
}
