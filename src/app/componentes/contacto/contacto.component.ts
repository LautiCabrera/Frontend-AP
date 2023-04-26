import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

  myForm = {
    name: '',
    email: '',
    message: ''
  }
  isFormSent = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

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
