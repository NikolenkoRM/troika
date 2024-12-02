import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Input() prevDisabled: boolean = false;
  @Input() nextDisabled: boolean = false;
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
}
