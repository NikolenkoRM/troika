import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'troika-rules',
  standalone: true,
  imports: [],
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesComponent {}
