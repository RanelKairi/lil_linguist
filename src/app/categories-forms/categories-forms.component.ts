import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CategoryService2 } from '../services/category2.service';
import { Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { Language } from '../../models/enums/language.enum';
import { TranslatedWord } from '../../models/tanslated-word.model';


@Component({
  selector: 'app-categories-forms',
  standalone: true,
  imports: [
    CommonModule,       
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './categories-forms.component.html',
  styleUrl: './categories-forms.component.css'
})
export class CategoriesFormsComponent {
Translatedword: any;


    currentCategory: Category = new Category(0,'',Language.English,Language.Hebrew);
    @ViewChild('wordPairs') wordPairs? : NgModelGroup;
  
    @Input()
    id? : string;
  
  
    constructor(private categoryService: CategoryService2, private router: Router) {}
  
    ngOnInit(): void {
      if (this.id) {
        let personFromService = this.categoryService.get(parseInt(this.id));
  
        if (personFromService) {
          this.currentCategory = personFromService;
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
      this.router.navigate(['/']);
    }


    addPairWords() {
      this.currentCategory.words.push(new TranslatedWord("",Language.Hebrew))
    }

    removePairWords(index : number) {
      this.currentCategory.words.splice(index,1);
      this.wordPairs?.control.markAsDirty();
    }


}
