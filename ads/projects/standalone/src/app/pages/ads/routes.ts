import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ads-list/ads-list.component').then((c) => c.AdsListComponent),
  },
  {
    path: ':id',
    title: 'Карточка ',
    canMatch: [() => true],
    loadComponent: () =>
      import('./ads-card/ads-card.component').then((c) => c.AdsCardComponent),
  },
  {
    path: ':id',
    title: 'Карточка продавца',
    canMatch: [() => true],
    loadComponent: () =>
      import('../lk/lk.component').then((c) => c.LkComponent),
  },
];
