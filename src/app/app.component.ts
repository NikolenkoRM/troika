import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rules } from '../utils/rules/rules';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@Component({
  selector: 'troika-root',
  standalone: true,
  imports: [NavBarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // const backgrounds = parseBackgrounds();
    console.log(rules);
  }
}
