import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  urlPer: string = "";
  urlEdu: string = "";
  urlProj: string = "";
  urlExp: string = "";
  urlSkill: string = "";

  constructor(private storage: Storage) { }

  // Función para subir imágenes y almacenar la URL en la propiedad correspondiente
  public uploadImage($event: any, name: string, category: string): void {
    const file = $event.target.files[0] as File;
    const imgRef = ref(this.storage, `${category}/${name}`);
    uploadBytes(imgRef, file)
      .then((snapshot: any) => {
        return getDownloadURL(snapshot.ref);
      })
      .then((url: string) => {
        this.setImageURL(url, category);
      })
      .catch((error: any) => console.log(error));
  }

  // Función para establecer la URL en la propiedad correspondiente según la categoría
  private setImageURL(url: string, category: string): void {
    switch (category) {
      case "Person":
        this.urlPer = url;
        break;
      case "Education":
        this.urlEdu = url;
        break;
      case "Project":
        this.urlProj = url;
        break;
      case "Experience":
        this.urlExp = url;
        break;
      case "Skill":
        this.urlSkill = url;
        break;
      default:
        console.log("Categoría no válida");
    }
  }

}