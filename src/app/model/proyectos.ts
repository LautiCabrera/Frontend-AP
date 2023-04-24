export class Proyectos {

    id?: number;
    nombre: String;
    descripcion: String;
    duracion: String;
    imagen: String;
    info: String;

    constructor(nombre: String, descripcion: String, duracion: String, imagen: String, info: String){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.imagen = imagen;
        this.info = info;
    }
}