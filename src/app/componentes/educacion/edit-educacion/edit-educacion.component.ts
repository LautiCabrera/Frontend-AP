import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { Storage } from '@angular/fire/storage'

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})

export class EditEducacionComponent implements OnInit {

  educacion: Educacion = new Educacion("","","","","");
  imagenUrl: String;
  public imagenSeleccionada = false;

  constructor(private educacionService: EducacionService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenesService, private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    window.scrollTo(0, 0);
    this.educacionService.detalle(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    );
  }

  Actualizar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(id, { ...this.educacion, imagen: this.imagenService.urlEdu }).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{ 
         alert("Error al modificar educación");
         this.router.navigate(['']);
      }
    );
  }

  uploadImagen($event:any){ 
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "edu_" + id; 
    this.imagenService.uploadImagenEdu($event, name);
    this.imagenSeleccionada = true;
  }

  Cancel(){
    this.router.navigate(['']);
  }  

}
