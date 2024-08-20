import { Component } from '@angular/core';
import { ExperienceService } from 'src/app/service/experience.service';
import { Experience } from 'src/app/model/experience';
import { CrudService } from 'src/app/service/crud.service';
import { ImagesService } from 'src/app/service/images.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {

  experience: Experience = new Experience("", "", "", "", "");
  public selectedImage = false;

  constructor(
    private experienceService: ExperienceService,
    private crudService: CrudService,
    public imageService: ImagesService
  ) { }

  save(): void {
    this.crudService.handleSave(
      this.experienceService.save(this.experience), 'Experiencia añadida con éxito!', 'Error al añadir experiencia'
    );
    location.reload();
  }

  uploadImage($event: any) {
    const uuid = uuidv4();
    const name = "/New/exp_" + uuid;
    this.imageService.uploadImage($event, name, "Experience");
    this.selectedImage = true;
  }

}