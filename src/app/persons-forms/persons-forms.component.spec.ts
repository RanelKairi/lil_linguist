import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsFormsComponent } from './persons-forms.component';

describe('PersonsFormsComponent', () => {
  let component: PersonsFormsComponent;
  let fixture: ComponentFixture<PersonsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonsFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
