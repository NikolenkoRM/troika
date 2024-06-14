import { Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { BackgroundsComponent } from './backgrounds.component';

export const BACKGROUNDS_ROUTES: Routes = [
  {
    path: '',
    component: BackgroundsComponent,
    title: 'Предыстории',
    children: [
      {
        path: ':background',
        component: BackgroundComponent,
      },
    ],
  },
];
