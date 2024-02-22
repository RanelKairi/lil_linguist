import { ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CategoryService } from './services/category.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideClientHydration(),
      provideAnimations(),
      CategoryService,
    ]
};
