import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListasComponent } from './form-listas.component';

describe('FormListasComponent', () => {
  let component: FormListasComponent;
  let fixture: ComponentFixture<FormListasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormListasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
