import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { Language } from '../../models/enums/language.enum';
import { TranslatedWord } from '../../models/tanslated-word.model';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD

=======
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
export class CategoryService {
  [x: string]: any;
  private categoriesIdToData = new Map<number, Category>();
  private nextId = 0;
<<<<<<< HEAD
  private nextWordCount = 0;
=======
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
  private categories: Category[] = [];
  

  constructor() { }

  list(): Category[] {
    return Array.from(this.categoriesIdToData.values());
  }

  add(name: string): Category {
    const id = this.nextId++;
<<<<<<< HEAD
    
    const newCategory = new Category(id, name, Language.English, Language.Hebrew);
    const wordCount = this.nextWordCount++;
=======
    const counts:number = this['wordCount']++;
    const newCategory = new Category(id, name, Language.English, Language.Hebrew);
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
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
<<<<<<< HEAD
  addWordToCategory(categoryId: number, words: TranslatedWord): void {
    const category = this.categories.find(c => c.id === categoryId);
    if (category) {
      category.words.push(words);
=======
  addWordToCategory(categoryId: number, word: TranslatedWord): void {
    const category = this.categories.find(c => c.id === categoryId);
    if (category) {
      category.words.push(word);
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
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

