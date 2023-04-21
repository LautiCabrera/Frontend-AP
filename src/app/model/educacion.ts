export class Educacion {
    
    id?: number;
    nombre: String;
    descripcion: String;
    duracion: String;
    imagen: String;

    constructor(nombre: String, descripcion: String, duracion: String, imagen: String){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.imagen = imagen;
    }
}
