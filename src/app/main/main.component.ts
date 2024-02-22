import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
<<<<<<< HEAD
=======
import { CategoryService } from '../services/category.service';
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category.model';
<<<<<<< HEAD
import { FormsComponent } from '../forms/forms.component';
import { CategoryService2 } from '../services/category2.service';
=======

>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
<<<<<<< HEAD
  imports: [MatTableModule, MatIconModule, MatButtonModule, CommonModule, FormsComponent],
})
export class MainComponent implements OnInit {
  [x: string]: any;
=======
  imports: [MatTableModule, MatIconModule, MatButtonModule, CommonModule],
})
export class MainComponent implements OnInit {
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
  categories: Category[] = [];
  displayedColumns: string[] = ['name', 'wordCount', 'lastEditDate', 'actions'];

  constructor(
<<<<<<< HEAD
    private categoryService: CategoryService2,
=======
    private categoryService: CategoryService,
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categories = this.categoryService.list();
<<<<<<< HEAD
    console.log(this.categories)
    console.log(this.categories[2])
    //console.log(this.categories)
    //console.log(this['categoriesIdToData'].values())
    //list(): Category[] {
//    return Array.from(this.categoriesIdToData.values());
  //}

=======
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
  }

  createNewCategory() {
    this.router.navigate(['/newcategory']);
  }

  editCategory(categoryId: number) {
<<<<<<< HEAD
    this.router.navigate(['editcategory/:id', categoryId]);
=======
    this.router.navigate(['/editcategory', categoryId]);
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
  }

  deleteCategory(categoryId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
<<<<<<< HEAD
      width: '300px',
      data: { message: 'Are you sure you want to delete this category?' }
    });

    dialogRef.afterClosed().subscribe(_result => {
      if (true) {
        this.categoryService.delete(categoryId);
        this.fetchCategories(); // Refresh the list
=======
      data: { message: 'Are you sure you want to delete this category?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.delete(categoryId);
        this.fetchCategories();
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
      }
    });
  }
}