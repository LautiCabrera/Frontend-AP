import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { CrudService } from 'src/app/service/crud.service';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-encabezado',
  templateUrl: './edit-encabezado.component.html',
  styleUrls: ['./edit-encabezado.component.css']
})
export class EditEncabezadoComponent implements OnInit {

  person: Person = new Person("", "", "", "", "");
  private id!: number;

  constructor(
    private personService: PersonService,
    private activatedRouter: ActivatedRoute,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.loadPerson();
  }

  loadPerson(): void {
    this.crudService.handleSingleDataLoad(
      this.id, this.personService.detail.bind(this.personService), (data) => {
        this.person = data;
      }
    );
  }

  update(): void {
    this.crudService.handleUpdate(
      this.personService.update(this.id, this.person),
      'Información personal modificada con éxito.',
      'Error al modificar información personal.'
    );
  }

}