import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {

  isLogged = false;
  persona: Persona = new Persona("","","","","");
  
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }  
  
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    } 
  }  
  
  cargarPersona(){
    this.personaService.detalle(2).subscribe(data => {this.persona = data});
  }  
}
