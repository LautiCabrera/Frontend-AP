import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})

export class EditProyectoComponent implements OnInit {

  proyecto: Proyectos = new Proyectos("","","","","");
  imagenUrl: String;
  public imagenSeleccionada = false;

  constructor(private proyectoService: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenesService, private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    window.scrollTo(0, 0);
    this.proyectoService.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    );
  }

  Actualizar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.update(id, { ...this.proyecto, imagen: this.imagenService.urlProy }).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{ 
         alert("Error al modificar proyecto");
         this.router.navigate(['']);
      }
    )
  }

  uploadImagen($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_"+ id;
    this.imagenService.uploadImagenProy($event, name);
    this.imagenSeleccionada = true;
  }
  
  Cancel(){
    this.router.navigate(['']);
  }  

}
