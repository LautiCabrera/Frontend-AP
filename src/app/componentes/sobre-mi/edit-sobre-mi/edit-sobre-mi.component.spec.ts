import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSobreMiComponent } from './edit-sobre-mi.component';

describe('EditSobreMiComponent', () => {
  let component: EditSobreMiComponent;
  let fixture: ComponentFixture<EditSobreMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSobreMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSobreMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
