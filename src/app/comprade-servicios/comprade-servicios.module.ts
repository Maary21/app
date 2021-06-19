import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompradeServiciosPageRoutingModule } from './comprade-servicios-routing.module';

import { CompradeServiciosPage } from './comprade-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompradeServiciosPageRoutingModule
  ],
  declarations: [CompradeServiciosPage]
})
export class CompradeServiciosPageModule {}
