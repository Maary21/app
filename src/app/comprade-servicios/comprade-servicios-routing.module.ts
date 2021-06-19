import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompradeServiciosPage } from './comprade-servicios.page';

const routes: Routes = [
  {
    path: '',
    component: CompradeServiciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompradeServiciosPageRoutingModule {}
