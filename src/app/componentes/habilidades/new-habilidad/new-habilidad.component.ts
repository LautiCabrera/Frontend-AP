import { Component } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { ImagesService } from 'src/app/service/images.service';
import { CrudService } from 'src/app/service/crud.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent {

  skill: Skill = new Skill("", "");
  public selectedImage = false;

  constructor(
    private skillService: SkillService,
    private crudService: CrudService,
    public imageService: ImagesService
  ) { }

  save(): void {
    this.skill.icon = this.imageService.urlSkill;
    this.crudService.handleSave(
      this.skillService.save(this.skill), '¡Habilidad añadida con éxito!', 'Error al añadir habilidad'
    );
  }

  uploadImage($event: any) {
    const uuid = uuidv4();
    const name = "/New/skill_" + uuid;
    this.imageService.uploadImage($event, name, "Skill");
    this.selectedImage = true;
  }

}