import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../services/category.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category.model';
import { FormsComponent } from '../forms/forms.component';
import { CategoryService2 } from '../services/category2.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CommonModule, FormsComponent],
})
export class MainComponent implements OnInit {
  [x: string]: any;
  categories: Category[] = [];
  displayedColumns: string[] = ['name', 'wordCount', 'lastEditDate', 'actions'];

  constructor(
    private categoryService: CategoryService2,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categories = this.categoryService.list();
    console.log(this.categories)
    console.log(this.categories[2])
    //console.log(this.categories)
    //console.log(this['categoriesIdToData'].values())
    //list(): Category[] {
//    return Array.from(this.categoriesIdToData.values());
  //}

  }

  createNewCategory() {
    this.router.navigate(['/newcategory']);
  }

  editCategory(categoryId: number) {
    this.router.navigate(['editcategory/:id', categoryId]);
  }

  deleteCategory(categoryId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this category?' }
    });

    dialogRef.afterClosed().subscribe(_result => {
      if (true) {
        this.categoryService.delete(categoryId);
        this.fetchCategories(); // Refresh the list
      }
    });
  }
}
