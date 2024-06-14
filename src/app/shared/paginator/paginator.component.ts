import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
}
