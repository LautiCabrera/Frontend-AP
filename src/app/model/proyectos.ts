export class Proyectos {

    id?: number;
    nombre: String;
    descripcion: String;
    url: String

    constructor(nombre: String, descripcion: String, url: String){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.url = url;
    }
}