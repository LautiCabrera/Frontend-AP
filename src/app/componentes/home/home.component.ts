import { Component, Inject } from '@angular/core';
import { fadeInOut } from 'src/app/animations/shared-animations';
import { AppComponent } from 'src/app/app.component';
import { CrudService } from 'src/app/service/crud.service';
import { NotificationService } from 'src/app/service/notification.service';
import { PersonService } from 'src/app/service/person.service';
import { ThemeService } from 'src/app/service/theme.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeInOut
  ]
})
export class HomeComponent extends AppComponent {

  constructor(
    public themeService: ThemeService,
    notificationService: NotificationService,
    personService: PersonService,
    tokenService: TokenService,
    crudService: CrudService,
    @Inject('personId') protected override personId: number
  ) {
    super(notificationService, tokenService, personService, crudService, personId);
  }

  construirUrl(title: String): String {
    let color;
    this.themeService.getTheme() === 'light' ? color = "002540" : color = "e8f3f1";
    const imagePath = 'https://readme-typing-svg.demolab.com?font=Sevillana&pause=1000&weight=600&size=50&pause=1000&color=' + color + '&center=true&width=1000&height=150&lines=';
    return `${imagePath}${title}`;
  }

}