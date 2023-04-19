import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ModalesService } from 'src/app/service/modales.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  modalProyNew: boolean;
  modalProyEdit: boolean;
  proyectos: Proyectos[] = [];

  constructor(private Proyectos: ProyectoService, private tokenService: TokenService, private modalSS: ModalesService) { }

  isLogged = false;

  ngOnInit(): void {

    this.cargarProyectos();
    if (this.tokenService.getToken()){
      this.isLogged = true;
      this.modalSS.$modal.subscribe((valor)=>{this.modalProyNew = valor});
      this.modalSS.$modal.subscribe((valor)=>{this.modalProyEdit = valor});
    } else {
      this.isLogged = false;
    } 
  }

  cargarProyectos(): void{
    this.Proyectos.lista().subscribe(data =>{ this.proyectos = data; })
  } 

  delete(id?: number){
    if(id != undefined){
      this.Proyectos.delete(id).subscribe(
        data => {
          this.cargarProyectos();
        }, err => {
          alert("No fue posible eliminar la educación");
        }
      )
    }
  }

  openNewProy(){
    this.modalProyNew = true;
  }

  openEditProy(){
    this.modalProyEdit = true;
  }

} 
