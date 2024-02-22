import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Category } from '../../models/category.model';
import { Language } from '../../models/enums/language.enum';
import { Router } from 'express';
import { CategoryService2 } from '../services/category2.service';

@Component({
  selector: 'app-persons-forms',
  standalone: true,
  imports: [CommonModule,       
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './persons-forms.component.html',
  styleUrl: './persons-forms.component.css'
})
export class PersonsFormsComponent implements OnInit {

currentCategory : Category = new Category (0,'',Language.English,Language.Hebrew,)

@Input()
id? : string

constructor (
  private categoryService : CategoryService, private router : Router) {}

ngOnInit(): void {
if(this.id){
  let categoryFromService = this.categoryService.get(parseInt(this.id));

if(categoryFromService){
  this.currentCategory = categoryFromService;
    }
  }
}

onSubmitRegistration() {
  console.log("Form submitted!");
  if (this.id) {
    this.categoryService.update(this.currentCategory);
  } else {
    this.categoryService.add(this.currentCategory)
  }
  this.router.navigate(['/persons']);
}

addPhoneNumber() {
  this.currentPerson.phones.push(new PhoneNumber("", PhoneType.Mobile));
}

removePhoneNumber(index : number) {
  this.currentPerson.phones.splice(index, 1);
  this.phoneGroup?.control.markAsDirty();
}
} 
