import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { AlertController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb:FormBuilder,public alertController: AlertController, public navCtrl:NavController) {
    this.formularioRegistro = this.fb.group({
      'ID': new FormControl("",Validators.required),
      'Contraseña': new FormControl("",Validators.required),
      'ConfContra': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

  async guardar(){

    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header:'Datos incompletos',
        message: 'Debe llenar el formulario',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var usuario={
      ID: f.ID,
      Contraseña : f.Contraseña
    }
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('ingresado','true');
    this.navCtrl.navigateRoot('menu/perfil');
  }
}
