import { Injectable } from "@angular/core";
import { Location } from '@angular/common';
import { Observable } from "rxjs";
import { NotificationService } from "./notification.service";
import { CacheService } from "./cache.service";

@Injectable({
    providedIn: 'root'
})
export class CrudService {

    constructor(private notificationService: NotificationService, private location: Location, private cacheService: CacheService) { }

    handleSingleDataLoad<T>(
        id: number,
        serviceCall: (id: number) => Observable<T>,
        cacheKeyPrefix: string,
        onSuccess: (data: T) => void
    ): void {
        const cacheKey = `${cacheKeyPrefix}_${id}`;
        const cachedData = this.cacheService.getCache<T>(cacheKey);

        if (cachedData) {
            onSuccess(cachedData);
        } else {
            serviceCall(id).subscribe({
                next: (data) => {
                    this.cacheService.setCache(cacheKey, data); // Almacena los datos en el cache
                    onSuccess(data);
                },
                error: (error) => {
                    console.error(`Error loading resource with ID ${id}:`, error);
                }
            });
        }
    }

    handleDataLoad<T>(serviceCall: Observable<T>, cacheKey: string, onSuccess: (data: T) => void): void {
        const cachedData = this.cacheService.getCache<T>(cacheKey);
        if (cachedData) {
            onSuccess(cachedData);
        } else {
            serviceCall.subscribe({
                next: (data) => {
                    this.cacheService.setCache(cacheKey, data); // Almacena los datos en el cache
                    onSuccess(data);
                },
                error: (error) => {
                    console.error('Error loading resources:', error);
                }
            });
        }
    }

    handleSave<T>(saveCall: Observable<T>, successMessage: string, errorMessage: string): void {
        saveCall.subscribe(
            data => {
                this.notificationService.showSuccess(successMessage);
                setTimeout(() => {
                    location.reload();
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