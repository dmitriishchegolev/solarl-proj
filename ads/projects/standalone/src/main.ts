import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { AuthGuard } from './app/guards/auth.guard';
import { LOCALE_ID, inject } from '@angular/core';
import { UserService } from './app/services/user.service';
import { RegisterComponent } from './app/pages/register/register.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu);

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
        canActivate: [
          () => inject(UserService).isLoggined(),
          () => inject(UserService).isAdmin(),
        ],
        loadComponent: () =>
          import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
      },
      {
        path: 'user/:id',
        title: 'Пользователь',
        resolve: {
          user: () => {
            return { name: 'Вася' };
          },
          breadCrumbsLabel: () => 'Вася',
        },
        loadComponent: () =>
          import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
      },
      {
        path: 'reg',
        title: 'Регистрация',
        canDeactivate: [
          (component: RegisterComponent) => {
            if (component.form.dirty) {
              return window.confirm('Вы уверены?');
            } else {
              return true;
            }
          },
        ],
        loadComponent: () =>
          import('./app/pages/register/register.component').then(
            (c) => c.RegisterComponent
          ),
      },
      {
        path: 'ads',
        title: 'Список',
        loadChildren: () =>
          import('./app/pages/ads/routes').then((r) => r.routes),
      },

      {
        path: 'ads1',
        title: 'Список 1',
        canActivateChild: [AuthGuard],
        loadComponent: () =>
          import('./app/pages/ads/ads-list/ads-list.component').then(
            (c) => c.AdsListComponent
          ),
        children: [
          {
            path: ':id',
            title: 'Карточка 1',
            loadComponent: () =>
              import('./app/pages/ads/ads-card/ads-card.component').then(
                (c) => c.AdsCardComponent
              ),
          },
        ],
      },
      {
        path: 'lk2',
        title: 'Личный кабинет',
        canMatch: [() => false],
        loadComponent: () =>
          import('./app/pages/lk/lk.component').then((c) => c.LkComponent),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./app/pages/not-found/not-found.component').then(
            (c) => c.NotFoundComponent
          ),
      },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    },
  ],
}).catch((err) => console.error(err));
