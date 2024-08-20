import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string, action: string = 'Cerrar', duration: number = 3000): void {
    this.snackBar.open(message, action, {
      duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: ['success-snackbar']
    });
  }

  showError(message: string, action: string = 'Cerrar', duration: number = 3000): void {
    this.snackBar.open(message, action, {
      duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: ['error-snackbar']
    });
  }

  showInfo(message: string, action: string = 'Cerrar', duration: number = 3000): void {
    this.snackBar.open(message, action, {
      duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
      panelClass: ['info-snackbar']
    });
  }

  confirmDeletion(confirmMessage: string, actionButton: string, _cancelButton: string = 'Cerrar', duration: number = 5000): Observable<boolean> {
    const snackBarRef = this.snackBar.open(confirmMessage, actionButton, {
      duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });

    return new Observable<boolean>(observer => {
      snackBarRef.onAction().subscribe(() => {
        observer.next(true); // Acción de eliminación confirmada
        observer.complete();
      });

      snackBarRef.afterDismissed().subscribe(info => {
        if (!info.dismissedByAction) {
          observer.next(false); // Acción de eliminación cancelada
          observer.complete();
        }
      });
    });
  }

}