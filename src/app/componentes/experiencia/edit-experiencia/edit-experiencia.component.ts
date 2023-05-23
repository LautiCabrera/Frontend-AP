import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { Storage } from '@angular/fire/storage'

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia("","","","","");
  imagenUrl: String;
  public imagenSeleccionada = false;

  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenesService, private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    window.scrollTo(0, 0);
    this.experienciaService.detail(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    );
  }

  Actualizar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.update(id, { ...this.experiencia, imagen: this.imagenService.urlExp }).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    );
  }

  uploadImagen($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "exp_" + id;
    this.imagenService.uploadImagenExp($event, name);
    this.imagenSeleccionada = true;
  }

  Cancel(){
    this.router.navigate(['']);
  }  

}
