import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHabilidadComponent } from './new-habilidad.component';

describe('NewHabilidadComponent', () => {
  let component: NewHabilidadComponent;
  let fixture: ComponentFixture<NewHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
