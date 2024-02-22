import { Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
<<<<<<< HEAD
import { CategoriesFormsComponent } from './categories-forms/categories-forms.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path:"newcategory", component:CategoriesFormsComponent},
    {path:'editcategory/:id',component:CategoriesFormsComponent},
=======
import { FormsComponent } from './forms/forms.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path:"newcategory", component:FormsComponent},
    {path:'editcategory/:id',component:FormsComponent},
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
];
