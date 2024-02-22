import { Component } from '@angular/core';
import { TranslatedWord } from '../../models/tanslated-word.model';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterModule,MatIconModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  allCategories : Category[] = [];
  displayedColumns: string[] = ['name', 'wordCount', 'lastEditDate', 'actions'];

  constructor(private dialog: MatDialog){}
}
