export class Person {
    
    id: number;
    name: String;
    lastname: String;
    image: String;
    description: String;
    title: String;

    constructor(name: String, lastname: String, description: String, image: String, title: String){
        this.name = name;
        this.lastname = lastname;
        this.description = description;
        this.image = image;
        this.title = title;
    }

}