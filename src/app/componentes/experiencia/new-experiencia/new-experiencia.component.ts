import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Experiencia } from 'src/app/model/experiencia';
import { ModalesService } from 'src/app/service/modales.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombre: String;
  descripcion: String;
  duracion: String;
  imagenUrl: String;
  info: String;

  constructor(private Experiencia: ExperienciaService, private router: Router, private modalSS: ModalesService) { }

  ngOnInit(): void {
  }

  Guradar(): void {
    const experiencia = new Experiencia (this.nombre, this.descripcion, this.duracion, this.imagenUrl, this.info);
    this.Experiencia.save(experiencia).subscribe(
      data => {
        alert("Experiencia añadida");
        this.modalSS.$modal.emit(false);
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        window.location.reload();
        window.scrollTo(scrollX, scrollY);
        this.router.navigate(['']);
      }, err => {
        alert("Fallo al añadir experiencia");
        this.modalSS.$modal.emit(false);
      }
    )
  }

  Cancel(){
    this.modalSS.$modal.emit(false);
    this.router.navigate(['']);
  }  

}