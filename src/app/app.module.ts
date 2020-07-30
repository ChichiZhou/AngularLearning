import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';

// 装饰器
@NgModule({
  // 此处定义包含在该module中的所有 components
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Register dependency. So Angular can do dependency injection
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
