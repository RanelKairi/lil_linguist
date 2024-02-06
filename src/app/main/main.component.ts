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


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, CommonModule],
})
export class MainComponent implements OnInit {
  categories: Category[] = [];
  displayedColumns: string[] = ['name', 'wordCount', 'lastEditDate', 'actions'];

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.categories = this.categoryService.list();
  }

  createNewCategory() {
    this.router.navigate(['/newcategory']);
  }

  editCategory(categoryId: number) {
    this.router.navigate(['/editcategory', categoryId]);
  }

  deleteCategory(categoryId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this category?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.delete(categoryId);
        this.fetchCategories();
      }
    });
  }
}