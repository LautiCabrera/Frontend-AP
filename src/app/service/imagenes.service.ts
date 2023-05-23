import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  urlPer: String = "";
  urlEdu: String = "";
  urlProy: String = "";
  urlExp: String = "";

  constructor(private storage: Storage) { }

  public uploadImagenPer($event: any, name: String){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `Persona/${name}`);
    uploadBytes(imgRef, file)
      .then(snapshot => {
        getDownloadURL(snapshot.ref)
          .then(url => {
            this.urlPer = url;
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  public uploadImagenEdu($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `Educacion/${name}`);
    uploadBytes(imgRef, file)
      .then(snapshot => {
        getDownloadURL(snapshot.ref)
          .then(url => {
            this.urlEdu = url;
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  public uploadImagenProy($event: any, name: String){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `Proyecto/${name}`);
    uploadBytes(imgRef, file)
      .then(snapshot => {
        getDownloadURL(snapshot.ref)
          .then(url => {
            this.urlProy = url;
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

  public uploadImagenExp($event: any, name: String){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `Experiencia/${name}`);
    uploadBytes(imgRef, file)
      .then(snapshot => {
        getDownloadURL(snapshot.ref)
          .then(url => {
            this.urlExp = url;
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }

}