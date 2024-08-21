import { Component, Inject } from '@angular/core';
import { expandCollapse, zoomIn } from 'src/app/animations/shared-animations';
import { AppComponent } from 'src/app/app.component';
import { Project } from 'src/app/model/proyect';
import { CrudService } from 'src/app/service/crud.service';
import { NotificationService } from 'src/app/service/notification.service';
import { PersonService } from 'src/app/service/person.service';
import { ProjectService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  animations: [
    zoomIn,
    expandCollapse
  ]
})
export class ProyectosComponent extends AppComponent {

  modalProjNew: boolean;
  projects: Project[] = [];
  isIconChanged = false;

  constructor(
    private projectService: ProjectService,
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
    this.loadProjects();
  }

  loadProjects(): void {
    const cacheKey = 'projects';
    this.crudService.handleDataLoad(this.projectService.list(), cacheKey, (data) => {
      this.projects = data;
    });
  }

  delete(id?: number): void {
    this.crudService.handleDelete(id, this.projectService.delete.bind(this.projectService), 'Proyecto eliminado con éxito.', this.loadProjects.bind(this));
  }

  toggleNewHab() {
    this.modalProjNew = !this.modalProjNew;
    this.isIconChanged = !this.isIconChanged;
  }

} 