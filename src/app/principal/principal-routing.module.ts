import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalPage
  },
  {
    path: 'ex01',
    loadChildren: () => import('./ex01/ex01.module').then( m => m.Ex01PageModule)
  },
  {
    path: 'ex02/prop1',
    loadChildren: () => import('./ex02/prop1/prop1.module').then( m => m.Prop1PageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./ex02/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ex02',
    loadChildren: () => import('./ex02/ex02.module').then( m => m.Ex02PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
