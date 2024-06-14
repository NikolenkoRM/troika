import { AsyncPipe } from '@angular/common';import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { IRuleArticle } from '../rules';
import { RulesService } from '../rules.service';

@Component({
  selector: 'app-rule',
  standalone: true,
  imports: [AsyncPipe, LoaderComponent],
  templateUrl: './rule.component.html',
  styleUrl: './rule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuleComponent {
  private readonly rulesService = inject(RulesService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly title = inject(Title);

  public readonly rule$ = this.activatedRoute.params.pipe(
    switchMap(({ paragraph }) =>
      this.rulesService.rules$.pipe(
        map(rules => rules.find(rule => rule.paragraph === paragraph)),
        tap(rule => this.title.setTitle(`${rule?.paragraph}. ${rule?.heading}`))
      )
    )
  );

  public getHeading(article: IRuleArticle): string {
    let { heading } = article;

    if (article.paragraph) {
      heading = `${article.paragraph}. ${heading}`;
    }

    return heading;
  }
}
