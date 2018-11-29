import { FavouriteService } from './favourite.service';
import { PipeSummary } from './summary.pipe';
import { AuthorsService } from './authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FormsModule } from '@angular/forms';
import { CasePipe } from './case.pipe';

@NgModule({

  //All components and pipes
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    PipeSummary,
    FavouriteComponent,
    CasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  //We register all the dependancies that all the components are dependant on
  //For example, CoursesComponent depends on CoursesService. This will create a singleton 
  providers: [
    CoursesService,
    AuthorsService,
    FavouriteService
  ],
  
    
  bootstrap: [AppComponent]
})
export class AppModule { }
