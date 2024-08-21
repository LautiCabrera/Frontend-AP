import { Component, Inject } from '@angular/core';
import { slideInLeft, slideInRight } from 'src/app/animations/shared-animations';
import { AppComponent } from 'src/app/app.component';
import { CrudService } from 'src/app/service/crud.service';
import { NotificationService } from 'src/app/service/notification.service';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
  animations: [
    slideInLeft,
    slideInRight
  ]
})
export class SobreMiComponent extends AppComponent {

  constructor(
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
  }

}