import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

info: any =[];

  constructor(
    private http: HttpClient) {

     }

  ngOnInit() {
    this.getInfo().subscribe(res=>{console.log("Res", res)
    this.info = res;
  })
    
  }

  getInfo(){
    return this.http
    .get('assets/files/datos.json')
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }
  

}
