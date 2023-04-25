import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    title: 'Главная',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'card',
    title: 'Карточка',
    loadChildren: () => import('./card/card.module').then((m) => m.CardModule),
    data: {
      description: 'Карточка чегото там',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
