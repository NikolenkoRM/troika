import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'troika-initiative',
  standalone: true,
  imports: [],
  templateUrl: './initiative.component.html',
  styleUrl: './initiative.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitiativeComponent {}
