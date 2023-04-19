import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})

export class NewHabilidadComponent implements OnInit {

  nombre: string;
  progreso: number;

  constructor(private habilidadService: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }

  Guardar(): void{
    const habilidad = new Habilidades(this.nombre, this.progreso);
    this.habilidadService.save(habilidad).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }

  Cancel(){

  }

}
