import { Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormsComponent } from './forms/forms.component';
import { NgModule } from '@angular/core';
import { CategoriesFormsComponent } from './categories-forms/categories-forms.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path:"newcategory", component:CategoriesFormsComponent},
    {path:'editcategory/:id',component:CategoriesFormsComponent},
];
