import { AsyncPipe, NgClass } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { ScreenResponsiveService } from '../services/screen-responsive.service';
import { SidenavService } from '../services/sidenav.service';
import { LoaderComponent } from '../shared/loader/loader.component';
import { IBackground } from './background/background';
import { BackgroundsService } from './backgrounds.service';

@Component({
  selector: 'app-backgrounds',
  standalone: true,
  imports: [
    MatListModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgClass,
    LoaderComponent,
  ],
  templateUrl: './backgrounds.component.html',
  styleUrl: './backgrounds.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundsComponent implements OnInit, AfterViewInit {
  @ViewChild('drawerContent') public drawerContent!: MatDrawerContent;

  private readonly backgroundsService = inject(BackgroundsService);
  public readonly screenResponsiveService = inject(ScreenResponsiveService);
  public readonly sidenavService = inject(SidenavService);
  public readonly activatedRoute = inject(ActivatedRoute);
  public readonly router = inject(Router);

  public readonly isMobileDevice$ = this.screenResponsiveService.isMobileDevice$;

  public readonly backgrounds$: Observable<IBackground[]> = this.backgroundsService.backgrounds$.pipe(
    map(backgrounds => backgrounds.sort((a, b) => (a.roll?.value || 0) - (b.roll?.value || 0)))
  );

  public currentBackground$: Observable<string | null> = this.activatedRoute.children[0]?.paramMap.pipe(
    map(params => params.get('background'))
  );

  public ngOnInit(): void {
    if (!this.activatedRoute.snapshot.params['background']) {
      this.backgrounds$.pipe(take(1)).subscribe(backgrounds => {
        this.router.navigate(['backgrounds', backgrounds[0].name]);
      });
    }
  }

  public ngAfterViewInit(): void {
    this.currentBackground$?.subscribe(() => this.drawerContent?.scrollTo({ top: 0 }));
  }
}
