import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ModalesService } from 'src/app/service/modales.service';
import { Storage, getDownloadURL, listAll, ref} from '@angular/fire/storage';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})

export class EditProyectoComponent implements OnInit {

  proyecto: Proyectos = new Proyectos("","","","", "");
  imagenUrl: String;

  constructor(private Proyectos: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router, public imagenService: ImagenesService, private storage: Storage, private modalSS: ModalesService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Proyectos.detail(id).subscribe(
      data =>{
        this.proyecto = data;
      }, err =>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    );
    this.getImagenes('');
  }

  Actualizar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyecto.imagen = this.imagenService.urlProy;
    this.Proyectos.update(id, this.proyecto).subscribe(
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
    this.imagenService.uploadImagenPer($event, name);
  }

  getImagenes(_name: String) {
    const imagesRef = ref(this.storage, `proyecto/`);
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
