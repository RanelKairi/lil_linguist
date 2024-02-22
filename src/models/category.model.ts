import { TranslatedWord } from "./tanslated-word.model";
import { Language } from "./enums/language.enum";
<<<<<<< HEAD
import { FormsComponent } from "../app/forms/forms.component";

export class Category {
  
=======

export class Category {
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
  id: number;
  name: string;
  origin: Language; 
  target: Language;
  lastUpdateDate: Date = new Date();
  words: TranslatedWord[] = [];
<<<<<<< HEAD
public wordCount: number =0;
  
=======
 public wordCount: number =0;
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb

  constructor(
    id: number,
    name: string,
    origin: Language,
<<<<<<< HEAD
    target: Language, 
    
    ) {

=======
    target: Language
  ) {
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
    this.id = id;
    this.name = name;
    this.origin = origin;
    this.target = target;
<<<<<<< HEAD
  
=======
>>>>>>> a5fd187414aaad451b242c69c158c1b450fb62fb
  }
}
