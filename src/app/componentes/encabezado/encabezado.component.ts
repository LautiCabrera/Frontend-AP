import { Component, Inject } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';
import { ThemeService } from 'src/app/service/theme.service';
import { AppComponent } from 'src/app/app.component';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent extends AppComponent {

  constructor(
    public override notificationService: NotificationService,
    public themeService: ThemeService, 
    public override personService: PersonService,
    tokenService: TokenService,
    @Inject('personId') protected override personId: number
  ) {
    super(notificationService, tokenService, personService, personId); 
  } 

  toggleTheme() {
    const newTheme = this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}