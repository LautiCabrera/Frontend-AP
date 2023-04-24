import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { Storage, getDownloadURL, listAll, ref} from '@angular/fire/storage';
import { ModalesService } from 'src/app/service/modales.service';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})

export class EditSobreMiComponent implements OnInit {

  persona: Persona = new Persona("","","","","");
  imagenUrl: String;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenesService, private storage: Storage, private modalSS: ModalesService) { }

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
    this.getImagenes('');  
  } 

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.imagen = this.imagenService.urlPer;
    this.personaService.actualizar(id, this.persona).subscribe(
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
  }
    
  getImagenes(_name: String) {
    const imagesRef = ref(this.storage, `perfil/`);
    listAll(imagesRef)
    .then(async response => {
      for(let item of response.items){
          this.imagenUrl = await getDownloadURL(item);
        }
      }).catch(error => console.log(error))      
  }
  
  Cancel(){
    this.modalSS.$modal.emit(false);
    this.router.navigate(['']);
  }

}
