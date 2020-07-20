// Use export so Angular can see this component
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector: 'courses',
    // 这里使用 `` 可以将 template 分成许多行，这样便于阅读
    // Use Directives manipulate the DOM elements
    template: `
    <h2>{{ "Title: " + getTitle() }}</h2>
    <ul>
        <li *ngFor="let courseElement of courses">
            {{ courseElement }}
        </li>
    </ul>
    
    `
})
export class CoursesComponent{
    title = "List of Courses";
    getTitle(){
        return this.title;
    };
    courses;

    // Dependency injection
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    // If use logic for calling an HTTP service, there will be the following cons
    // 1.This will depend on the HTTP endpoints. It's not a good choice for testing
    // 2.This is not extenable.
    // 3.The component should not include others besides the presentation logic.
    

}