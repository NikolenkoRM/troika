import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'rules',
    pathMatch: 'full',
  },
  {
    path: 'backgrounds',
    loadChildren: () => import('./backgrounds/backgrounds.routes').then(r => r.BACKGROUNDS_ROUTES),
  },
  {
    path: 'rules',
    loadChildren: () => import('./rules/rules.routes').then(r => r.RULES_ROUTES),
  },
  {
    path: 'tables',
    loadChildren: () => import('./tables/tables.routes').then(r => r.TABLES_ROUTES),
  },
  {
    path: 'turn-tracker',
    loadChildren: () => import('./turn-tracker/turn-tracker.routes').then(r => r.TURN_TRACKER_ROUTES),
  },
];
