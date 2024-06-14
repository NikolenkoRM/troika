import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly currentYear = new Date().getFullYear();
  public readonly links = [
    { url: 'backgrounds', title: 'Предыстории' },
    { url: 'rules', title: 'Правила' },
    { url: 'tables', title: 'Таблицы' },
    { url: 'turn-tracker', title: 'Стопка инициативы' },
  ];
}
