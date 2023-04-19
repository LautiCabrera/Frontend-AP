import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
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

  constructor(private Educacion: EducacionService, private tokenService: TokenService, private modalSS: ModalesService) { }

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
      )
    }
  }

  openNewEdu(){
    this.modalEduNew = true;
  }

  openEditEdu(){
    this.modalEduEdit = true;
  }

}
