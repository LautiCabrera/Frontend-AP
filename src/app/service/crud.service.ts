import { Injectable } from "@angular/core";
import { Location } from '@angular/common';
import { Observable } from "rxjs";
import { NotificationService } from "./notification.service";

@Injectable({
    providedIn: 'root'
})
export class CrudService {

    constructor(private notificationService: NotificationService, private location: Location) { }

    handleSingleDataLoad<T>(id: number, serviceCall: (id: number) => Observable<T>, onSuccess: (data: T) => void): void {
        serviceCall(id).subscribe({
            next: (data) => {
                onSuccess(data);
            },
            error: (error) => {
                console.error(`Error loading resource with ID ${id}:`, error);
            }
        });
    }

    handleDataLoad<T>(serviceCall: Observable<T>, onSuccess: (data: T) => void): void {
        serviceCall.subscribe({
            next: (data) => {
                onSuccess(data);
            },
            error: (error) => {
                console.error('Error loading resources:', error);
            }
        });
    }

    handleSave<T>(saveCall: Observable<T>, successMessage: string, errorMessage: string): void {
        saveCall.subscribe(
            data => {
                this.notificationService.showSuccess(successMessage);
                setTimeout(() => {

                }, 3000);
            },
            err => {
                this.notificationService.showError(errorMessage);
                setTimeout(() => {
                    location.reload();
                }, 3000);
            }
        );
    }

    handleUpdate<T>(updateCall: Observable<T>, successMessage: string, errorMessage: string): void {
        updateCall.subscribe(
            data => {
                this.notificationService.showSuccess(successMessage);
                this.location.back();
            },
            err => {
                this.notificationService.showError(errorMessage);
                this.location.back();
            }
        );
    }

    handleDelete(id: number | undefined, deleteServiceCall: (id: number) => Observable<any>, successMessage: string, loadFunction: () => void): void {
        if (id != undefined) {
            this.notificationService.confirmDeletion('¿Estás seguro que deseas eliminar este elemento?', 'Eliminar').subscribe(
                confirmed => {
                    if (confirmed) {
                        deleteServiceCall(id).subscribe(
                            data => {
                                this.notificationService.showSuccess(successMessage);
                                loadFunction();
                            },
                            err => {
                                this.notificationService.showError('No fue posible eliminar el elemento.');
                            }
                        );
                    } else {
                        this.notificationService.showInfo('Eliminación cancelada.');
                    }
                }
            );
        }
    }

}