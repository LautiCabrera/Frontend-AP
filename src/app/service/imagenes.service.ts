import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, list, ref, uploadBytes} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  url: String = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: String){
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/`+ name);
    uploadBytes(imgRef, file).then(response => {
      this.getImagenes();
    })
    .catch(error => console.log(error));
  }

  getImagenes(){
    const imagenesRef = ref(this.storage, `imagen/`+ name);
    list(imagenesRef).then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("La URL es: " + this.url);
      }
    })    
    .catch(error => console.log(error));      
  }
}
