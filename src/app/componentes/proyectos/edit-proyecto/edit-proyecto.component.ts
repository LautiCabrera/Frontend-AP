import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/model/proyect';
import { ProjectService } from 'src/app/service/proyecto.service';
import { ImagesService } from 'src/app/service/images.service';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  project: Project = new Project("", "", "", "", "", "");
  public selectedImage = false;
  private id!: number;

  constructor(
    private projectService: ProjectService,
    private activatedRouter: ActivatedRoute,
    public imageService: ImagesService,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.loadProject();
  }

  loadProject(): void {
    this.crudService.handleSingleDataLoad(
      this.id, this.projectService.detail.bind(this.projectService), (data) => {
        this.project = data;
      }
    );
  }

  update(): void {
    this.project.image = this.selectedImage ? this.imageService.urlProj : this.project.image;
    this.crudService.handleUpdate(
      this.projectService.update(this.id, this.project),
      'Proyecto modificado con éxito.',
      'Error al modificar proyecto.'
    );
  }

  uploadImage($event: any) {
    const name = "project_" + this.id;
    this.imageService.uploadImage($event, name, "Project");
    this.selectedImage = true;
  }

}