// Use export so Angular can see this component
import { Component } from '@angular/core';
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
    courses = ["course1", "course2", "course3"];

}