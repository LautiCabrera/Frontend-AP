import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading = true; 
  persona: Persona = new Persona("","","","","");

  constructor(public personaService: PersonaService, private router: Router) { }  

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.personaService.detalle(2).subscribe(data => {
        this.persona = data
        this.isLoading = false;
        window.scrollTo(0, 0);
      });
    });
  }

}
