import { Component, Inject } from '@angular/core';
import { expandCollapse, zoomIn } from 'src/app/animations/shared-animations';
import { AppComponent } from 'src/app/app.component';
import { Education } from 'src/app/model/education';
import { CrudService } from 'src/app/service/crud.service';
import { EducationService } from 'src/app/service/education.service';
import { NotificationService } from 'src/app/service/notification.service';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  animations: [
    zoomIn,
    expandCollapse
  ]
})
export class EducacionComponent extends AppComponent {

  education: Education[] = [];
  modalEduNew = false;
  isIconChanged = false;

  constructor(
    private educationService: EducationService,
    notificationService: NotificationService,
    personService: PersonService,
    tokenService: TokenService,
    crudService: CrudService,
    @Inject('personId') protected override personId: number
  ) {
    super(notificationService, tokenService, personService, crudService, personId);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadEducacions();
  }

  loadEducacions(): void {
    const cacheKey = 'educations';
    this.crudService.handleDataLoad(this.educationService.list(), cacheKey, (data) => {
      this.education = data;
    });
  }

  delete(id?: number): void {
    this.crudService.handleDelete(id, this.educationService.delete.bind(this.educationService), 'Experiencia eliminada con éxito.', this.loadEducacions.bind(this));
  }

  toggleNewEdu() {
    this.modalEduNew = !this.modalEduNew;
    this.isIconChanged = !this.isIconChanged;
  }

}