import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'comprade-servicios',
        loadChildren: () => import('../comprade-servicios/comprade-servicios.module').then( m => m.CompradeServiciosPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule),
        
      },
      {
        path: 'pagos',
        loadChildren: () => import('../pagos/pagos.module').then( m => m.PagosPageModule)
      },
      {
        path: 'anuncios',
        loadChildren: () => import('../anuncios/anuncios.module').then( m => m.AnunciosPageModule)
      },
      {
        path: 'formp',
        loadChildren: () => import('../formp/formp.module').then( m => m.FormpPageModule)
      },

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
