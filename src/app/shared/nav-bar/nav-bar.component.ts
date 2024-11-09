import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { ILink } from '../links/link';
import { navBarLinks } from '../links/nav-bar-links';

@Component({
  selector: 'troika-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, MatListModule, MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  public themeService = inject(ThemeService);

  public navBarLinks: ILink[] = navBarLinks;
}
