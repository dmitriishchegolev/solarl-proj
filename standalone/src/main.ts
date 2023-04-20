import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Главная',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./app/pages/main/main.component').then(
            (c) => c.MainComponent
          ),
      },
      {
        path: 'lk',
        title: 'Личный кабинет',
        loadComponent: () =>
          import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
      },
      {
        path: 'ads',
        title: 'Список',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./app/pages/ads/ads-list/ads-list.component').then(
                (c) => c.AdsListComponent
              ),
          },
          {
            path: ':id',
            title: 'Карточка',
            loadComponent: () =>
              import('./app/pages/ads/ads-card/ads-card.component').then(
                (c) => c.AdsCardComponent
              ),
          },
        ],
      },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
