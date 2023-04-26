import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { ModalesService } from 'src/app/service/modales.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})

export class NewHabilidadComponent implements OnInit {

  nombre: string;
  progreso: number;

  constructor(private habilidadService: HabilidadesService, private router: Router, private modalSS: ModalesService) { }

  ngOnInit(): void {
  }

  Guardar(): void{
    const habilidad = new Habilidades(this.nombre, this.progreso);
    this.habilidadService.save(habilidad).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.modalSS.$modal.emit(false);
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        window.location.reload();
        window.scrollTo(scrollX, scrollY);
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la habilidad");
        this.router.navigate(['']);
        this.modalSS.$modal.emit(false);
      }
    )
  }

  Cancel(){
    this.modalSS.$modal.emit(false);
    this.router.navigate(['']);
  }

}
