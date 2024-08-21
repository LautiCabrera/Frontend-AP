import { Component, Inject } from '@angular/core';
import { expandCollapse, zoomIn } from 'src/app/animations/shared-animations';
import { AppComponent } from 'src/app/app.component';
import { Experience } from 'src/app/model/experience';
import { CrudService } from 'src/app/service/crud.service';
import { ExperienceService } from 'src/app/service/experience.service';
import { NotificationService } from 'src/app/service/notification.service';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
  animations: [
    zoomIn,
    expandCollapse
  ]
})
export class ExperienciaComponent extends AppComponent {

  experience: Experience[] = [];
  modalExpNew = false;
  isIconChanged = false;

  constructor(
    public experienceService: ExperienceService,
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
    this.loadExperiences();
  }

  loadExperiences(): void {
    const cacheKey = 'experiences';
    this.crudService.handleDataLoad(this.experienceService.list(), cacheKey, (data) => {
      this.experience = data;
    });
  }

  delete(id?: number): void {
    this.crudService.handleDelete(id, this.experienceService.delete.bind(this.experienceService), 'Experiencia eliminada con éxito.', this.loadExperiences.bind(this));
  }

  toggleNewExp() {
    this.modalExpNew = !this.modalExpNew;
    this.isIconChanged = !this.isIconChanged;
  }

}