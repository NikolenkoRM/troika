import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'troika-backgrounds',
  standalone: true,
  imports: [],
  templateUrl: './backgrounds.component.html',
  styleUrl: './backgrounds.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundsComponent {}
