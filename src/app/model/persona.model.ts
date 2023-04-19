export class Persona {
    
    id: number;
    nombre: String;
    apellido: String;
    imagen: String;
    descripcion: String;

    constructor(nombre: String, apellido: String, descripcion: String, imagen: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}