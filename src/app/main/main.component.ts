import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category.model';
import { Language } from '../../models/enums/language.enum';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  categories: Category[] = [];
  displayedColumns: string[] = ['name', 'wordCount', 'lastEditDate', 'actions'];

  constructor() {
    this.categories = [
      {
        name: 'Animals',
        id: 1,
        updated_at: new Date(),
        originLang: Language['English'],
        destLang: Language['Hebrew'],
        words: new Map([
          ['Dog', 'כלב'],
          ['Cat', 'חתול'],
          ['Pegion','יונה'],
        ]),
      },
      {
        name: 'Veggies',
        id: 2,
        updated_at: new Date(),
        originLang: Language['Hebrew'],
        destLang: Language['English'],
        words: new Map([
          ['Cucumber', 'מלפפון'],
          ['Tomato', 'עגבנייה'],
          ['Onion', 'בצל'],
          ['Lattece', 'חסה'],
          ['Garlic', 'שום'],
        ]),
      },
      {
        name: 'Fruits',
        id: 3,
        updated_at: new Date(),
        originLang: Language['English'],
        destLang: Language['Hebrew'],
        words: new Map([
          ['Apple', 'תפוח'],
          ['Watermelon', 'אבטיח'],
          ['Peach', 'אפרסק'],
        ]),
      },
    ];
  }

  createNewCategory() {
    
    console.log('Create New Category clicked');
  }

  editCategory(category: Category) {
    
    console.log('Edit Category clicked:', category);
  }

  deleteCategory(category: Category) {
    
    console.log('Delete Category clicked:', category);
  }
}
