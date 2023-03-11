import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex01PageRoutingModule } from './ex01-routing.module';

import { Ex01Page } from './ex01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex01PageRoutingModule
  ],
  declarations: [Ex01Page]
})
export class Ex01PageModule {}
