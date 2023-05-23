import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { Storage, getDownloadURL, listAll, ref} from '@angular/fire/storage'

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})

export class EditEducacionComponent implements OnInit {

  educacion: Educacion = new Educacion("","","","","");
  imagenUrl: String;

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
    this.getImagenes('');  
  }

  Actualizar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacion.imagen = this.imagenService.urlEdu;
    this.educacionService.update(id, this.educacion).subscribe(
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
  }
    
  getImagenes(_name: String) {
    const imagesRef = ref(this.storage, `Educacion/`);
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
