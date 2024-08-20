import { Component, Inject, OnInit } from '@angular/core';
import { Person } from './model/person.model';
import { PersonService } from './service/person.service';
import { TokenService } from './service/token.service';
import { NotificationService } from './service/notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: 'personId', useValue: 1 }
  ]
})
export class AppComponent implements OnInit {

  isLogged = false;
  isLoading = true;
  person: Person = new Person("", "", "", "", "");

  constructor(
    public notificationService: NotificationService,
    protected tokenService: TokenService,
    public personService: PersonService,
    @Inject('personId') protected personId: number
  ) { }

  ngOnInit(): void {
    this.loadState();
    this.loadPerson();
  }

  loadState(): void {
    this.isLogged = this.tokenService.isLogged();
  }

  loadPerson(): void {
    this.personService.detail(this.personId).subscribe({
      next: (data) => {
        this.person = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading resources:', error);
      }
    });
  }

}