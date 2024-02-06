import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { Language } from '../../models/enums/language.enum';
import { TranslatedWord } from '../../models/tanslated-word.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  [x: string]: any;
  private categoriesIdToData = new Map<number, Category>();
  private nextId = 0;
  private categories: Category[] = [];
  

  constructor() { }

  list(): Category[] {
    return Array.from(this.categoriesIdToData.values());
  }

  add(name: string): Category {
    const id = this.nextId++;
    const counts:number = this['wordCount']++;
    const newCategory = new Category(id, name, Language.English, Language.Hebrew);
    this.categoriesIdToData.set(id, newCategory);
    return newCategory;
  }

  delete(id: number): void {
    this.categoriesIdToData.delete(id);
  }

  get(id: number): Category | undefined {
    return this.categoriesIdToData.get(id);
  }

  update(id: number, name: string): void {
    const existingCategory = this.categoriesIdToData.get(id);
    if (existingCategory) {
      existingCategory.name = name;
      existingCategory.lastUpdateDate = new Date();
    }
  }
  addWordToCategory(categoryId: number, word: TranslatedWord): void {
    const category = this.categories.find(c => c.id === categoryId);
    if (category) {
      category.words.push(word);
      category.wordCount++;
    }
  }
  removeWordFromCategory(categoryId: number, wordIndex: number): void {
    const category = this.categories.find(c => c.id === categoryId);
    if (category && category.words[wordIndex]) {
      category.words.splice(wordIndex, 1);
      category.wordCount--;
    }
  }



}

