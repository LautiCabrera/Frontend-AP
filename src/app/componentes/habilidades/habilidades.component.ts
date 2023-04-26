import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';
import { ModalesService } from 'src/app/service/modales.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  habilidad: Habilidades[] = [];
  modalHabNew: boolean;
  modalHabEdit: boolean;

  constructor(private habilidadesService: HabilidadesService, private tokenService: TokenService, private modalSS: ModalesService) { }
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.modalSS.$modal.subscribe((valor)=>{this.modalHabNew = valor});
      this.modalSS.$modal.subscribe((valor)=>{this.modalHabEdit = valor});
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void{
    this.habilidadesService.lista().subscribe(
      data => {
        this.habilidad = data;
      }
    )
  }

  delete(id: number){
    if(id != undefined){
      this.habilidadesService.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }

  openNewHab(){
    this.modalHabNew = true;
  }

}
