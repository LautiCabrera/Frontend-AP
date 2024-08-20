import { Component } from '@angular/core';
import { Education } from 'src/app/model/education';
import { CrudService } from 'src/app/service/crud.service';
import { EducationService } from 'src/app/service/education.service';
import { ImagesService } from 'src/app/service/images.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {

  education: Education = new Education("", "", "", "", "");
  public selectedImage = false;

  constructor(
    private educationService: EducationService,
    private crudService: CrudService,
    public imageService: ImagesService
  ) { }

  save(): void {
    this.crudService.handleSave(
      this.educationService.save(this.education), '¡Educación añadida con éxito!', 'Error al añadir educación'
    );
    location.reload();
  }

  uploadImage($event: any) {
    const uuid = uuidv4();
    const name = "/New/edu_" + uuid;
    this.imageService.uploadImage($event, name, "Education");
    this.selectedImage = true;
  }

}