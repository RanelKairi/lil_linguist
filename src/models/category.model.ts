import { TranslatedWord } from "./tanslated-word.model";
import { Language } from "./enums/language.enum";
import { FormsComponent } from "../app/forms/forms.component";

export class Category {
  
  id: number;
  name: string;
  origin: Language; 
  target: Language;
  lastUpdateDate: Date = new Date();
  words: TranslatedWord[] = [];
public wordCount: number =0;
  

  constructor(
    id: number,
    name: string,
    origin: Language,
    target: Language, 
    
    ) {

    this.id = id;
    this.name = name;
    this.origin = origin;
    this.target = target;
  
  }
}
