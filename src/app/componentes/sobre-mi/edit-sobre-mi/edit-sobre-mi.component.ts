import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})

export class EditSobreMiComponent implements OnInit {

  persona: Persona = new Persona("","","","","");
  imagenUrl: String;
  public imagenSeleccionada = false;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenesService, private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detalle(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    );
  } 

  Actualizar(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.actualizar(id, { ...this.persona, imagen: this.imagenService.urlPer }).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    );  
  }

  uploadImagen($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil_"+ id;
    this.imagenService.uploadImagenPer($event, name);
    this.imagenSeleccionada = true;
  }
  
  Cancel(){
    this.router.navigate(['']);
  }

}
