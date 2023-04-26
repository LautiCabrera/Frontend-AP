import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { Storage, getDownloadURL, listAll, ref} from '@angular/fire/storage'

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia("","","","","");
  imagenUrl: String;

  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenesService, private storage: Storage) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    );
    this.getImagenes(''); 
  }

  Actualizar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experiencia.imagen = this.imagenService.urlExp;
    this.experienciaService.update(id, this.experiencia).subscribe(
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
  }
   
  getImagenes(_name: String) {
    const imagesRef = ref(this.storage, `Experiencia/`);
    listAll(imagesRef)
    .then(async response => {
      for(let item of response.items){
          this.imagenUrl = await getDownloadURL(item);
        }
      }).catch(error => console.log(error));     
  }

  Cancel(){
    this.router.navigate(['']);
  }  

}
