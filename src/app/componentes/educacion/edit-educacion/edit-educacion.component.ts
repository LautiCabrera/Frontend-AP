import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ModalesService } from 'src/app/service/modales.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})

export class EditEducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(private Educacion: EducacionService, private activatedRouter: ActivatedRoute, private router: Router, private modalSS: ModalesService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.Educacion.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al modificar educación");
        this.router.navigate(['']);
      }
    )
  }

  Actualizar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.Educacion.update(id, this.educacion).subscribe(
      data => {
        this.modalSS.$modal.emit(false);
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        window.location.reload();
        window.scrollTo(scrollX, scrollY);
        this.router.navigate(['']);
      }, err =>{ 
         alert("Error al modificar educación");
         this.router.navigate(['']);
      }
    )
  }

  Cancel(){
    this.modalSS.$modal.emit(false);
    this.router.navigate(['']);
  }  

}
