import { Component, Inject } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css'],
})
export class PiePaginaComponent {

  constructor(private clipboard: Clipboard, private snackBar: MatSnackBar) { }  

  copyEmail(event: Event) {
    event.preventDefault();
    const email = 'lau.cabrera114@gmail.com';
    this.clipboard.copy(email);
    this.snackBar.open('¡Correo copiado!', 'Cerrar', {
      duration: 2000,
      verticalPosition: 'bottom', 
      horizontalPosition: 'center'
    });
  }

}