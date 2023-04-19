import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { JsonService } from 'src/app/service/json.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent {
  
  isLogged = false;
  persona: Persona = new Persona("","","","","");

  constructor(public personaService: PersonaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login'])
  }

  construirUrl(titulo: String): String{
    const imagePath = 'https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=50&pause=1000&color=6052FF&center=true&width=1000&height=150&lines=';
    return `${imagePath}${titulo}`;
  }

  cargarPersona(){
    this.personaService.detalle(1).subscribe(data => {this.persona = data});
  }
}
