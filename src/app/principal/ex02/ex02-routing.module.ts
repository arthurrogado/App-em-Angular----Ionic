import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ex02Page } from './ex02.page';
import { InicioPage } from './inicio/inicio.page';
import { Prop1Page } from './prop1/prop1.page';

const routes: Routes = [
  {
    path: '',
    component: Ex02Page
  },
  {
    path: 'inicio',
    component: InicioPage
  },
  {
    path: 'prop1',
    component: Prop1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ex02PageRoutingModule {}
