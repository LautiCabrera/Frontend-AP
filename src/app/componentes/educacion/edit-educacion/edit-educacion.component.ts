import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/model/education';
import { CrudService } from 'src/app/service/crud.service';
import { EducationService } from 'src/app/service/education.service';
import { ImagesService } from 'src/app/service/images.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
})
export class EditEducacionComponent implements OnInit {

  education: Education = new Education("", "", "", "", "");
  public selectedImage = false;
  private id!: number;

  constructor(
    private educationService: EducationService,
    private activatedRouter: ActivatedRoute,
    public imageService: ImagesService,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.loadEducation();
  }

  loadEducation(): void {
    this.crudService.handleSingleDataLoad(
      this.id,
      this.educationService.detail.bind(this.educationService),
      'education_edit',
      (data) => {
        this.education = data;
      }
    );
  }

  update(): void {
    this.education.image = this.selectedImage ? this.imageService.urlEdu : this.education.image;
    this.crudService.handleUpdate(
      this.educationService.update(this.id, this.education),
      'Educación modificada con éxito.',
      'Error al modificar educación.'
    );
  }

  uploadImage($event: any) {
    const name = "edu_" + this.id;
    this.imageService.uploadImage($event, name, "Education");
    this.selectedImage = true;
  }

}