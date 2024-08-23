import { Component } from '@angular/core';
import { Project } from 'src/app/model/proyect';
import { CrudService } from 'src/app/service/crud.service';
import { ImagesService } from 'src/app/service/images.service';
import { ProjectService } from 'src/app/service/proyecto.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {

  project: Project = new Project("", "", "", "", "", "");
  public selectedImage = false;

  constructor(
    private projectService: ProjectService,
    private crudService: CrudService,
    public imageService: ImagesService
  ) { }

  save(): void {
    this.project.image = this.imageService.urlProj;
    this.crudService.handleSave(
      this.projectService.save(this.project), '¡Proyecto añadido con éxito!', 'Error al añadir proyecto'
    );
  }

  uploadImage($event: any) {
    const uuid = uuidv4();
    const name = "/New/project_" + uuid;
    this.imageService.uploadImage($event, name, "Project");
    this.selectedImage = true;
  }

}