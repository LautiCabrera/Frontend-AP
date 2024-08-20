import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { bounceIn } from 'src/app/animations/shared-animations';

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

  constructor(private http: HttpClient) { }

  submitForm() {
    this.http.post('https://formspree.io/f/mdovybep', this.myForm)
      .subscribe(response => {
        console.log(response);
        this.isFormSent = true;
        this.myForm = {
          name: '',
          email: '',
          message: ''
        }
        alert('El mensaje fue enviado con éxito');
    }, error => {
      console.log(error);
      alert('Ocurrió un error al enviar el mensaje');
    });
  }

}