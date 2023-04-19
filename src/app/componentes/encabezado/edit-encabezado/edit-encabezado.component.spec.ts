import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEncabezadoComponent } from './edit-encabezado.component';

describe('EditEncabezadoComponent', () => {
  let component: EditEncabezadoComponent;
  let fixture: ComponentFixture<EditEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEncabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
