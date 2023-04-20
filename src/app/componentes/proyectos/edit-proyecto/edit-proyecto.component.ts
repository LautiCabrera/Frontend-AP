import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ModalesService } from 'src/app/service/modales.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})

export class EditProyectoComponent {

  proyecto: Proyectos = null;

  constructor(private Proyectos: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router, private modalSS: ModalesService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Proyectos.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  Actualizar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Proyectos.update(id, this.proyecto).subscribe(
      data => {
        this.modalSS.$modal.emit(false);
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        window.location.reload();
        window.scrollTo(scrollX, scrollY);
        this.router.navigate(['']);
      }, err =>{ 
         alert("Error al modificar proyecto");
         this.router.navigate(['']);
      }
    )
  }

  Cancel(){
    this.modalSS.$modal.emit(false);
    this.router.navigate(['']);
  }  

}
