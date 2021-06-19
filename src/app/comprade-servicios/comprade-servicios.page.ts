import { AlertController} from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprade-servicios',
  templateUrl: './comprade-servicios.page.html',
  styleUrls: ['./comprade-servicios.page.scss'],
})
export class CompradeServiciosPage implements OnInit {

  compra: any =[];

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  async Comprar(){
    const alert = await this.alertController.create({
      header:"Aviso",
      message:"Al realizar la inscripción de este servicio ya no se podrá revertir, ¿Desea Continuar?",
      buttons:[
        {
          text:"No",
          handler: () => {

          }
        },
        {
          text:"Si",
          handler: () =>{
            this.compra=[{
              "Debe": "1234"
            }]
        
          }
        }
      ]
    });

    await alert.present();
  }
}
