import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { ScreenResponsiveService } from '../services/screen-responsive.service';
import { SidenavService } from '../services/sidenav.service';
import { LoaderComponent } from '../shared/loader/loader.component';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { RulesService } from './rules.service';

@Component({
  selector: 'app-rules',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AsyncPipe,
    RouterOutlet,
    NgTemplateOutlet,
    RouterLink,
    RouterLinkActive,
    LoaderComponent,
    PaginatorComponent,
  ],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesComponent {
  @ViewChild('drawerContent') public drawerContent!: MatDrawerContent;

  public readonly rulesService = inject(RulesService);
  public readonly screenResponsiveService = inject(ScreenResponsiveService);
  public readonly sidenavService = inject(SidenavService);
  public readonly activatedRoute = inject(ActivatedRoute);
  public readonly router = inject(Router);

  public readonly rules$ = this.rulesService.rules$;

  public readonly currentParagraph$!: Observable<number | undefined>;
  public readonly isFirst$!: Observable<boolean>;
  public readonly isLast$!: Observable<boolean>;

  constructor() {
    if (this.activatedRoute.firstChild) {
      this.currentParagraph$ = this.activatedRoute.firstChild?.params.pipe(map(params => Number(params['paragraph'])));
      this.isFirst$ = this.currentParagraph$.pipe(map(paragraph => paragraph === 1));
      this.isLast$ = this.currentParagraph$.pipe(
        switchMap(paragraph => this.rules$.pipe(map(rules => paragraph === rules.length + 1)))
      );
    }
  }

  public goToParagraph(paragraph: number): void {
    this.router.navigate(['rules', paragraph]);
  }
}
