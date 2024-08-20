import { Component, Inject } from '@angular/core';
import { slideInLeft, slideInRight } from 'src/app/animations/shared-animations';
import { AppComponent } from 'src/app/app.component';
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
    public override notificationService: NotificationService,
    public override personService: PersonService,
    tokenService: TokenService,
    @Inject('personId') protected override personId: number
  ) {
    super(notificationService, tokenService, personService, personId); 
  } 
  
}