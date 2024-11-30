import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BackgroundsService } from './backgrounds.service';

@Component({
  selector: 'troika-backgrounds',
  standalone: true,
  imports: [],
  templateUrl: './backgrounds.component.html',
  styleUrl: './backgrounds.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundsComponent implements OnInit {
  public backgroundsService = inject(BackgroundsService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.backgroundsService.backgrounds$.subscribe(console.log);
  }
}
