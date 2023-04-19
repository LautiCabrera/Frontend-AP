import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHabilidadComponent } from './edit-habilidad.component';

describe('EditHabilidadComponent', () => {
  let component: EditHabilidadComponent;
  let fixture: ComponentFixture<EditHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
