import { Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { FormsComponent } from './forms/forms.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path:"newcategory", component:FormsComponent},
    {path:'editcategory/:id',component:FormsComponent},
];
