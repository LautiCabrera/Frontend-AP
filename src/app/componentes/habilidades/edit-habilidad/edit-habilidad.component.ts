import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { CrudService } from 'src/app/service/crud.service';
import { ImagesService } from 'src/app/service/images.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {

  skill: Skill = new Skill("", "");
  public selectedImage = false;
  private id!: number;

  constructor(
    private skillService: SkillService,
    private activatedRouter: ActivatedRoute,
    public imageService: ImagesService,
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.loadSkill();
  }

  loadSkill(): void {
    this.crudService.handleSingleDataLoad(
      this.id, this.skillService.detail.bind(this.skillService), (data) => {
        this.skill = data;
      }
    );
  }

  update(): void {
    this.skill.icon = this.selectedImage ? this.imageService.urlSkill : this.skill.icon;
    this.crudService.handleUpdate(
      this.skillService.update(this.id, this.skill),
      'Habilidad modificada con éxito.',
      'Error al modificar habilidad.'
    );
  }

  uploadImage($event: any) {
    const name = "skill_" + this.id;
    this.imageService.uploadImage($event, name, "Skill");
    this.selectedImage = true;
  }

}