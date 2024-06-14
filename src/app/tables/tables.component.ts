import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesComponent {}
