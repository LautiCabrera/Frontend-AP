export class Project {

    id?: number;
    name: String;
    description: String;
    duration: String;
    image: String;
    repo: String;
    demo: String;

    constructor(name: String, description: String, duration: String, image: String, repo: String, demo: String){
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.image = image;
        this.repo = repo;
        this.demo = demo;
    }

}