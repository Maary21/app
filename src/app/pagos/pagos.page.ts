import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  constructor(public alertController: AlertController, public navCtrl:NavController) { }

  ngOnInit() {
  }
  async Pagar(){
     
        this.navCtrl.navigateRoot('menu/formp');
     
    }

}
