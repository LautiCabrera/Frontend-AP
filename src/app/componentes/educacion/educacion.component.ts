import { Component, OnInit } from '@angular/core';
import { getDownloadURL, ref } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImagenesService } from 'src/app/service/imagenes.service';
import { ModalesService } from 'src/app/service/modales.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {
  
  modalEduNew: boolean;
  modalEduEdit: boolean;
  educacion: Educacion[] = [];
  storage: any;

  constructor(private Educacion: EducacionService, private tokenService: TokenService, private router: Router, private modalSS: ModalesService, private imagenService: ImagenesService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()){
      this.isLogged = true;
      this.modalSS.$modal.subscribe((valor)=>{this.modalEduNew = valor});
      this.modalSS.$modal.subscribe((valor)=>{this.modalEduEdit = valor});
    } else {
      this.isLogged = false;
    }
    
  }

  cargarEducacion(): void{
    this.Educacion.lista().subscribe(data =>{ this.educacion = data; })
  } 

  delete(id?: number){
    if(id != undefined){
      this.Educacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No fue posible eliminar la educación");
        }
      );
    }
  }

  openNewEdu(){
    this.modalEduNew = true;
  }

}
