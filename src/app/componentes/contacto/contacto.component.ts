import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { bounceIn } from 'src/app/animations/shared-animations';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  animations: [
    bounceIn
  ]
})
export class ContactoComponent {

  myForm = {
    name: '',
    email: '',
    message: ''
  }
  isFormSent = false;

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  submitForm() {
    this.http.post('https://formspree.io/f/mdovybep', this.myForm)
      .subscribe(response => {
        this.isFormSent = true;
        this.myForm = {
          name: '',
          email: '',
          message: ''
        }
        this.notificationService.showSuccess('El mensaje fue enviado con éxito');
      }, error => {
        this.notificationService.showError('Ocurrió un error al enviar el mensaje');
      });
  }

}