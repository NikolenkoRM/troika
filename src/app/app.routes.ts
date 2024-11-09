import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent) },
  {
    path: 'backgrounds',
    loadComponent: () => import('./pages/backgrounds/backgrounds.component').then(m => m.BackgroundsComponent),
  },
  {
    path: 'rules',
    loadComponent: () => import('./pages/rules/rules.component').then(m => m.RulesComponent),
  },
  {
    path: 'initiative',
    loadComponent: () => import('./pages/initiative/initiative.component').then(m => m.InitiativeComponent),
  },
];
