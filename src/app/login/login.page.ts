import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  constructor(public fb:FormBuilder, public alertController: AlertController, public navCtrl:NavController) {
    this.formularioLogin = this.fb.group({
      'ID': new FormControl("",Validators.required),
      'Contraseña': new FormControl("",Validators.required),
    })
   }

  ngOnInit() {
  }

  async Ingresar(){
    
    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.ID == f.ID && usuario.Contraseña == f.Contraseña ){
        console.log("Ingresado");
        localStorage.setItem('ingresado','true');
        this.navCtrl.navigateRoot('menu/perfil');
      }else{
        const alert = await this.alertController.create({
          header:'Datos incorrectos',
          message: 'Los datos que ingreso son incorrectos',
          buttons: ['Aceptar']
      } );
      
      await alert.present();
      }
    }
}
