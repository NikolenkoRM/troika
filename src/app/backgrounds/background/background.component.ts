import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { from, map, switchMap, tap } from 'rxjs';
import { ScreenResponsiveService } from '../../services/screen-responsive.service';
import { StorageService } from '../../services/storage.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { BackgroundsService } from '../backgrounds.service';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [AsyncPipe, NgClass, LoaderComponent],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly backgroundsService = inject(BackgroundsService);
  private readonly storageService = inject(StorageService);
  public readonly screenResponsiveService = inject(ScreenResponsiveService);
  private readonly title = inject(Title);

  public readonly isMobileDevice$ = this.screenResponsiveService.isMobileDevice$;

  public readonly background$ = this.activatedRoute.params.pipe(
    switchMap(({ background }) =>
      this.backgroundsService.backgrounds$.pipe(
        map(backgrounds => backgrounds.find(bg => bg.name === background)),
        tap(background => this.title.setTitle(background?.name || ''))
      )
    )
  );

  public readonly imageUrl = this.background$.pipe(
    switchMap(background => from(this.storageService.getImage(`${background?.roll?.value}.jpg`)))
  );
}
