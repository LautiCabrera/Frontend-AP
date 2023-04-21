import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ModalesService } from 'src/app/service/modales.service';
import { Storage, getDownloadURL, listAll, ref} from '@angular/fire/storage'

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})

export class NewEducacionComponent {
  
  nombre: String;
  descripcion: String;
  duracion: String;
  imagenUrl: String;

  constructor(private educacionService: EducacionService, private router: Router, private activatedRouter: ActivatedRoute, public imagenService: ImagenesService, private storage: Storage, private modalSS: ModalesService) { }

  ngOnInit(): void {
  }
 
  Guardar(): void{
    const educacion = new Educacion(this.nombre, this.descripcion, this.duracion, this.imagenUrl);
    this.educacionService.save(educacion).subscribe(
      data =>{
        alert("Educación añadida con éxito");
        this.modalSS.$modal.emit(false);
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        window.location.reload();
        window.scrollTo(scrollX, scrollY);
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir educación");
        this.modalSS.$modal.emit(false);
      }
    );
  }

  Cancel(){
    this.modalSS.$modal.emit(false);
    this.router.navigate(['']);
  }  

}
