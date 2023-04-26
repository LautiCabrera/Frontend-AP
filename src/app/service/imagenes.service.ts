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
    uploadBytes(imgRef, file).then(response => {
      this.getImagenesPer();
    }).catch(error => console.log(error));
  }

  getImagenesPer(){
    const imagenesRef = ref(this.storage, `Persona/${name}`);
    list(imagenesRef).then(async response => {
      for(let item of response.items){
        this.urlPer = await getDownloadURL(item);
        console.log("La URL es: " + this.urlPer);
      }
    })    
    .catch(error => console.log(error));      
  }

  public uploadImagenEdu($event: any, name: String){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `Educacion/${name}`);
    uploadBytes(imgRef, file).then(response => {
      this.getImagenesEdu();
    }).catch(error => console.log(error));
  }

  getImagenesEdu(){
    const imagenesRef = ref(this.storage, `Educacion/${name}`);
    list(imagenesRef).then(async response => {
      for(let item of response.items){
        this.urlEdu = await getDownloadURL(item);
        console.log("La URL es: " + this.urlEdu);
      }
    })    
    .catch(error => console.log(error));      
  }

  public uploadImagenProy($event: any, name: String){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `Proyecto/${name}`);
    uploadBytes(imgRef, file).then(response => {
      this.getImagenesProy();
    }).catch(error => console.log(error));
  }

  getImagenesProy(){
    const imagenesRef = ref(this.storage, `Proyecto/${name}`);
    list(imagenesRef).then(async response => {
      for(let item of response.items){
        this.urlProy = await getDownloadURL(item);
        console.log("La URL es: " + this.urlProy);
      }
    })    
    .catch(error => console.log(error));      
  }

  public uploadImagenExp($event: any, name: String){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `Experiencia/${name}`);
    uploadBytes(imgRef, file).then(response => {
      this.getImagenesExp();
    }).catch(error => console.log(error));
  }

  getImagenesExp(){
    const imagenesRef = ref(this.storage, `Experiencia/${name}`);
    list(imagenesRef).then(async response => {
      for(let item of response.items){
        this.urlExp = await getDownloadURL(item);
        console.log("La URL es: " + this.urlExp);
      }
    })    
    .catch(error => console.log(error));      
  }

}
