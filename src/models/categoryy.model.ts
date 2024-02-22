import { Language } from './enums/language.enum';
import { TranslatedWord } from './tanslated-word.model';

export class CategoryModel {
  lastUpdateDate = new Date();
  words : TranslatedWord[] = [];
 
  constructor( 
  public  name: string,
   public id: number,
   public originLang: Language,
    public destLang: Language,
  ) {
 
    this.originLang = originLang;
    this.destLang = destLang;
    
  }
}
 //originLang: Language;
  //destLang: Language;
  //name: string;
  //id: number;
 // words =  new Map <string, string>();
 // words: Map<string, string> 
 //  this.name = name;
   // this.id = id;
   //this.words = words;