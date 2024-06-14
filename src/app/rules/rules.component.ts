import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { ScreenResponsiveService } from '../services/screen-responsive.service';
import { SidenavService } from '../services/sidenav.service';
import { LoaderComponent } from '../shared/loader/loader.component';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { IRuleArticle } from './rules';
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
export class RulesComponent implements OnInit, AfterViewInit {
  @ViewChild('drawerContent') public drawerContent!: MatDrawerContent;

  public readonly rulesService = inject(RulesService);
  public readonly screenResponsiveService = inject(ScreenResponsiveService);
  public readonly sidenavService = inject(SidenavService);
  public readonly activatedRoute = inject(ActivatedRoute);
  public readonly router = inject(Router);

  private rules!: IRuleArticle[];

  public readonly rules$ = this.rulesService.rules$.pipe(
    map(rules => rules.sort((a, b) => Number(a.paragraph) - Number(b.paragraph))),
    tap(rules => (this.rules = rules))
  );

  public currentParagraph$: Observable<string | null> = this.activatedRoute.children[0].paramMap.pipe(
    map(params => params.get('background'))
  );

  public readonly isFirst$ = this.currentParagraph$.pipe(map(paragraph => Number(paragraph) === 1));
  public readonly isLast$ = this.currentParagraph$.pipe(map(paragraph => Number(paragraph) === this.rules.length + 1));

  public ngOnInit(): void {
    if (!this.activatedRoute.snapshot.params['paragraph']) {
      this.rules$.pipe(take(1)).subscribe(rules => {
        this.router.navigate(['rules', rules[0].paragraph]);
      });
    }
  }

  public ngAfterViewInit(): void {
    this.currentParagraph$.subscribe(() => this.drawerContent?.scrollTo({ top: 0 }));
  }

  public paginatorNext(): void {
    this.currentParagraph$
      .pipe(
        take(1),
        tap(currentParagraph => {
          const i = this.rules.findIndex(rule => rule.paragraph === currentParagraph);
          const nextRule = this.rules[i + 1];

          if (nextRule) {
            this.router.navigate(['rules', nextRule.paragraph]);
          }
        })
      )
      .subscribe();
  }
}
