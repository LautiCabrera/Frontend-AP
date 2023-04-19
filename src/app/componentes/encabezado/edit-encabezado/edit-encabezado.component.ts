import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { JsonService } from 'src/app/service/json.service';
import { ModalesService } from 'src/app/service/modales.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-encabezado',
  templateUrl: './edit-encabezado.component.html',
  styleUrls: ['./edit-encabezado.component.css']
})
export class EditEncabezadoComponent{

  persona: Persona = new Persona("","","","","");

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, private modalSS: ModalesService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detalle(id).subscribe(
      data => {
        this.persona = data;
      }, _err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.actualizar(id, this.persona).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    );  
  }
  
  Cancel(){
    this.modalSS.$modal.emit(false);
    this.router.navigate(['']);
  }


}



