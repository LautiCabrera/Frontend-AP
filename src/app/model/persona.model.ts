export class Persona {
    
    id: number;
    nombre: String;
    apellido: String;
    imagen: String;
    descripcion: String;
    titulo: String;

    constructor(nombre: String, apellido: String, descripcion: String, imagen: String, titulo: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.titulo = titulo;
    }
}