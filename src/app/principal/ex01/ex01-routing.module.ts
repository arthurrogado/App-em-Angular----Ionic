import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex01Page } from './ex01.page';

const routes: Routes = [
  {
    path: '',
    component: Ex01Page
  },
  {
    path: 'p1',
    loadChildren: () => import('./p1/p1.module').then( m => m.P1PageModule)
  },
  {
    path: 'p2',
    loadChildren: () => import('./p2/p2.module').then( m => m.P2PageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex01PageRoutingModule {}
