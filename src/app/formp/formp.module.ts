import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormpPageRoutingModule } from './formp-routing.module';

import { FormpPage } from './formp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormpPageRoutingModule
  ],
  declarations: [FormpPage]
})
export class FormpPageModule {}
