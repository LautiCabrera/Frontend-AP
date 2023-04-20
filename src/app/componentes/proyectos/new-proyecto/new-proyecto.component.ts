import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ModalesService } from 'src/app/service/modales.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {

  nombre: String;
  descripcion: String;
  url: String;

  constructor(private proyecto: ProyectoService, private router: Router, private modalSS: ModalesService) { }

  ngOnInit(): void {
  } 
 
  Guardar(): void{
    const proyecto = new Proyectos(this.nombre, this.descripcion, this.url);
    this.proyecto.save(proyecto).subscribe(
      data =>{
        alert("Proyecto añadido con éxito");
        this.modalSS.$modal.emit(false);
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        window.location.reload();
        window.scrollTo(scrollX, scrollY);
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir Proyecto");
        this.modalSS.$modal.emit(false);
      }
    )
  }

  Cancel(){
    this.modalSS.$modal.emit(false);
    this.router.navigate(['']);
  }  

}
