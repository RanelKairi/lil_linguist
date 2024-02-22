import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router , ActivatedRoute} from '@angular/router';
import { CategoryService } from '../services/category.service'; 
import { TranslatedWord } from '../../models/tanslated-word.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
<<<<<<< HEAD
import { Category } from '../../models/category.model';
=======
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule,MatIconModule],
})
export class FormsComponent implements OnInit {
<<<<<<< HEAD
[x: string]: any;
=======
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
  categoryForm: FormGroup;
  isEditing: boolean = false;
  categoryId: number | null = null;

  constructor(
    private fb: FormBuilder, 
    private categoryService: CategoryService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      words: this.fb.array([])
    });
  }

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    if (categoryId) {
<<<<<<< HEAD
      this.categoryId = +categoryId;
      const category = this.categoryService.get(+categoryId);
      if (category) {
        this.categoryForm.patchValue({
          name: category.name,
          
        });
        
=======
      const category = this.categoryService.get(parseInt(categoryId, 10));
      if (category) {
        this.categoryForm.patchValue({
          name: category.name,
        });
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
        category.words.forEach(word => this.addWordPair(word.origin, word.target));
      }
    }
  }

  get words(): FormArray {
    return this.categoryForm.get('words') as FormArray;
  }

  addWordPair(origin: string = '', target: string = ''): void {
    const wordPair = this.fb.group({
      origin: [origin, [Validators.required, Validators.pattern('[A-Za-z]*')]],
      target: [target, [Validators.required, Validators.pattern('[א-ת]*')]]
    });
<<<<<<< HEAD
    
   this.words.push(wordPair);
  }

  removeWordPair(index: number): void {
    this['words'].removeAt(index);
=======
    this.words.push(wordPair);
  }

  removeWordPair(index: number): void {
    this.words.removeAt(index);
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
  }

  saveCategory(): void {
    if (this.categoryForm.valid) {
      const formValue = this.categoryForm.value;
<<<<<<< HEAD
      console.log(formValue)
      if (this.isEditing && this.categoryId !== null) {
        
        this.categoryService.update(this.categoryId, formValue);
      } else {
        
        this.categoryService.add(formValue);
      }
      this.router.navigate(['/']); 
    }
  }
}
=======
      const categoryId = this.route.snapshot.paramMap.get('id');
      if (categoryId) {
        this.categoryService.update(parseInt(categoryId, 10), formValue);
      } else {
        this.categoryService.add(formValue);
      }
      this.router.navigate(['/']);
    }
  }
}
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
