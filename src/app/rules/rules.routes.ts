import { Routes } from '@angular/router';
import { RuleComponent } from './rule/rule.component';
import { RulesComponent } from './rules.component';

export const RULES_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '1',
    pathMatch: 'full',
  },
  {
    path: '',
    component: RulesComponent,
    children: [
      {
        path: ':paragraph',
        component: RuleComponent,
      },
    ],
  },
];
