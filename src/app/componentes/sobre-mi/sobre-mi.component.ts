import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { JsonService } from 'src/app/service/json.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit{

  isLogged = false;
  persona: Persona = null;
  datos : any = {};
  
  constructor(public personaService: PersonaService, private tokenService: TokenService, private jsonService: JsonService) { }  
  
  ngOnInit(): void {

    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    };
    this.jsonService.obtenerDatos().subscribe(
      (data : any ) => {
      this.datos = data;
    },
    (error: any) => {
      console.log(error);
    }
    );  
  }  
  
  cargarPersona(){
    this.personaService.detalle(1).subscribe(data =>
      {this.persona = data}
      );
  }  
}
