import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { ImagesService } from 'src/app/service/images.service';
import { PersonService } from 'src/app/service/person.service';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})
export class EditSobreMiComponent implements OnInit {

  person: Person = new Person("", "", "", "", "");
  public selectedImage = false;
  private id!: number;

  constructor(
    private personService: PersonService,
    private activatedRouter: ActivatedRoute,
    public imageService: ImagesService,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.loadPerson();
  }

  loadPerson(): void {
    this.crudService.handleSingleDataLoad(
      this.id,
      this.personService.detail.bind(this.personService),
      'person_edit',
      (data) => {
        this.person = data;
      }
    );
  }

  update(): void {
    this.person.image = this.selectedImage ? this.imageService.urlPer : this.person.image;
    this.crudService.handleUpdate(
      this.personService.update(this.id, this.person),
      'Información personal modificada con éxito.',
      'Error al modificar información personal.'
    );
  }

  uploadImage($event: any) {
    const name = "perfil_" + this.id;
    this.imageService.uploadImage($event, name, "Person");
    this.selectedImage = true;
  }

}