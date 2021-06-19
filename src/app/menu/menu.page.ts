import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado:number = 0;

  paginas=[
    {
    titulo:'Perfil',
    url: '/menu/perfil',
    icono: 'person-circle'
  },
  {
    titulo:'Servicios',
    url:'/menu/comprade-servicios',
    icono:'bag'
  },
  {
    titulo:'Mis pagos',
    url:'/menu/pagos',
    icono:'bag'
  },
  {
    titulo:'Anuncios',
    url:'/menu/anuncios',
    icono:'bag'
  }
]
  constructor(public alertController: AlertController, public navCtrl:NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }

  async Saalir(){
    const alert = await this.alertController.create({
      header:"Salir",
      message:"¿Realmente deseas salir?",
      buttons:[
        {
          text:"No",
          handler: () => {

          }
        },
        {
          text:"Si",
          handler: () =>{
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });
    await alert.present();
  }
}
