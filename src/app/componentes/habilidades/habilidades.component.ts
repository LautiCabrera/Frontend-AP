import { Component, Inject } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';
import { NotificationService } from 'src/app/service/notification.service';
import { bounceIn, expandCollapse, zoomIn } from 'src/app/animations/shared-animations';
import { AppComponent } from 'src/app/app.component';
import { PersonService } from 'src/app/service/person.service';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css'],
  animations: [
    expandCollapse,
    bounceIn,
    zoomIn
  ]
})
export class HabilidadesComponent extends AppComponent {

  skill: Skill[] = [];
  modalHabNew = false;
  isIconChanged = false;

  constructor(
    public skillService: SkillService,
    private crudService: CrudService,
    public override notificationService: NotificationService,
    public override personService: PersonService,
    tokenService: TokenService,
    @Inject('personId') protected override personId: number
  ) {
    super(notificationService, tokenService, personService, personId);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.loadSkills();
  }

  loadSkills(): void {
    this.crudService.handleDataLoad(this.skillService.list(), (data) => {
      this.skill = data;
    });
  }

  delete(id?: number): void {
    this.crudService.handleDelete(id, this.skillService.delete.bind(this.skillService), 'Habilidad eliminada con éxito.', this.loadSkills.bind(this));
  }

  toggleNewHab() {
    this.modalHabNew = !this.modalHabNew;
    this.isIconChanged = !this.isIconChanged;
  }

}