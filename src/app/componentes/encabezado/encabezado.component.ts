import { Component, Inject } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';
import { ThemeService } from 'src/app/service/theme.service';
import { AppComponent } from 'src/app/app.component';
import { NotificationService } from 'src/app/service/notification.service';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent extends AppComponent {

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

  toggleTheme() {
    const newTheme = this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}