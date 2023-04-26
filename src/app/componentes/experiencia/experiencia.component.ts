import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { ModalesService } from 'src/app/service/modales.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {

  modalExpNew: boolean;
  modalExpEdit: boolean;
  experiencia: Experiencia[] = []; 

  constructor(private Experiencia: ExperienciaService, private tokenService: TokenService, private modalSS: ModalesService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.modalSS.$modal.subscribe((valor)=>{this.modalExpNew = valor});
      this.modalSS.$modal.subscribe((valor)=>{this.modalExpEdit = valor});
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.Experiencia.lista().subscribe(data => { this.experiencia = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.Experiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No es posible eliminar la experiencia seleccionada");
        }
      )
    }
  }

  openNewExp(){
    this.modalExpNew = true;
  }

}
