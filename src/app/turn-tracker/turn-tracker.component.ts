import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-turn-tracker',
  standalone: true,
  imports: [],
  templateUrl: './turn-tracker.component.html',
  styleUrl: './turn-tracker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TurnTrackerComponent {}
