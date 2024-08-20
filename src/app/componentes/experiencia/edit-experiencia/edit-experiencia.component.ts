import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { CrudService } from 'src/app/service/crud.service';
import { ExperienceService } from 'src/app/service/experience.service';
import { ImagesService } from 'src/app/service/images.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  experience: Experience = new Experience("", "", "", "", "");
  public selectedImage = false;
  private id!: number;

  constructor(
    private experienceService: ExperienceService,
    private activatedRouter: ActivatedRoute,
    public imageService: ImagesService,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.loadExperience();
  }

  loadExperience(): void {
    this.crudService.handleSingleDataLoad(
      this.id, this.experienceService.detail.bind(this.experienceService), (data) => {
        this.experience = data;
      }
    );
  }

  update(): void {
    this.experience.image = this.selectedImage ? this.imageService.urlExp : this.experience.image;
    this.crudService.handleUpdate(
      this.experienceService.update(this.id, this.experience),
      'Experiencia modificada con éxito.',
      'Error al modificar experiencia.'
    );
  }

  uploadImage($event: any) {
    const name = "exp_" + this.id;
    this.imageService.uploadImage($event, name, "Experience");
    this.selectedImage = true;
  }

}