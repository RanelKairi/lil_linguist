import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFormsComponent } from './categories-forms.component';

describe('CategoriesFormsComponent', () => {
  let component: CategoriesFormsComponent;
  let fixture: ComponentFixture<CategoriesFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
