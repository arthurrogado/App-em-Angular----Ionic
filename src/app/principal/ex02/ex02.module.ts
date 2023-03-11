import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex02PageRoutingModule } from './ex02-routing.module';

import { Ex02Page } from './ex02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ex02PageRoutingModule
  ],
  declarations: [Ex02Page]
})
export class Ex02PageModule {}
