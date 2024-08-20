export class Education {
    
    id?: number;
    name: String;
    description: String;
    duration: String;
    image: String;
    info: String;

    constructor(name: String, description: String, duration: String, image: String, info: String){
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.image = image;
        this.info = info;
    }

}