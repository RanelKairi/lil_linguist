import { Category } from "../../models/category.model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})

export class CategoryService2{
    private readonly NEXT_ID_KEY = "nextId";


private getNextId() : number {
    let nextIdString = localStorage.getItem(this.NEXT_ID_KEY);
    return nextIdString ? parseInt(nextIdString): 0 ;
}



private setNextId( id : number){
    localStorage.setItem(this.NEXT_ID_KEY, id.toString());
}


private setCategories(allCategories : Map<number, Category>){
    localStorage.setItem(this.CATEGORY_KEY,
     JSON.stringify(Array.from(allCategories.values())))   ;
    
    }


private getCategories() : Map<number, Category> {
    let categoryString = localStorage.getItem(this.CATEGORY_KEY);
    let idToCategory = new Map<number , Category>();

    if(categoryString){
        JSON.parse(categoryString).forEach((category : Category) =>{
            Object.setPrototypeOf(category.id, category);
        });
    }

        return idToCategory;
    }


    private readonly CATEGORY_KEY = "categories";

    constructor(){ }

    list() : Category[]{
        return Array.from(this.getCategories().values());
    }

    get(id : number) : Category | undefined{
        return this.getCategories().get(id);
    }


    add(newCategoryData:Category) {
        let nextId = this.getNextId();
        newCategoryData.id = nextId

        let categoriesData = this.getCategories();
        categoriesData.set(nextId,newCategoryData);
        this.setCategories(categoriesData)

        this.setNextId(++nextId);
    }

    update(existingCategory: Category) : void {
        let categoriesData = this.getCategories();

        if(categoriesData.has(existingCategory.id)) {
            categoriesData.set(existingCategory.id, existingCategory);
            this.setCategories(categoriesData);
        }
    }

    delete(existingCategoryId : number) : void {
        let categoriesData = this.getCategories();

        categoriesData.delete(existingCategoryId);
        this.setCategories(categoriesData)
    }
    }


   // private  CategoriesIdToData = new Map < number , CategoryModel>()
    //private nextId = 0;

//constructor () { }
//list(): CategoryModel[] {
  //  return Array.from(this.CategoriesIdToData.values());
//}
//add(newCategory:CategoryModel){
//newCategory.id = this.nextId
//this.CategoriesIdToData.set(this.nextId, newCategory);
//this.nextId++;
//}

//delete(id:number): void{
  //  this.CategoriesIdToData.delete(id)
//}

//get(id:number):CategoryModel | undefined{
  //  return this.CategoriesIdToData.get(id)
//}

//update(existingCategory : CategoryModel):void{
  //  if(this.CategoriesIdToData.has(existingCategory.id)){
    //    this.CategoriesIdToData.set(existingCategory.id, existingCategory)
    //}
//}
//}