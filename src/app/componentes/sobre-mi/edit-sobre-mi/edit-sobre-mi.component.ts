import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { JsonService } from 'src/app/service/json.service';
import { PersonaService } from 'src/app/service/persona.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { Storage, getDownloadURL, listAll, ref, uploadBytes} from '@angular/fire/storage'
import { ModalesService } from 'src/app/service/modales.service';


@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})
export class EditSobreMiComponent {

  persona: Persona = null;
  datos : any = {};
  imageUrl: string;
  name: string;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, private jsonService: JsonService, public imagenService: ImagenesService, private storage: Storage, private modalSS: ModalesService) { }

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
    this.jsonService.obtenerDatos().subscribe(
      (data : any ) => {
      this.datos = data;
    },
    (error: any) => {
      console.log(error);
    }
    );
    this.getImagenes('');  
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.imagen = this.imagenService.url;
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
    this.imagenService.uploadImage($event, name)
    }
    
  getImagenes(name: String) {
    const imagesRef = ref(this.storage, `imagen/`);
    listAll(imagesRef)
    .then(async response => {
      for(let item of response.items){
          this.imageUrl = await getDownloadURL(item);
        }
      })    
    .catch(error => console.log(error))      
  }
  
  Cancel(){
    this.modalSS.$modal.emit(false);
    this.router.navigate(['']);
  }

}
