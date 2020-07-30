// Use export so Angular can see this component
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
// Add meta data so angular can understand this is a component
// Tell Angular how this component works
@Component({
    // css selector, 用来确定需要修饰的 html 的元素的位置
    // 在 component 中，可以 extend HTML vocabulary。也就是说可以自己定义tag（此处创建了 courses）
    selector: 'courses',

    // template 是用来表明这个 componenet 需要如何 render html （由 selector 确定）
    // 使用 {{}} (interpolation)能够传递该变量所指的参数值。实际上Angular会将这种表达方法反应成 property binding
    // 这里使用 `` 可以将 template 分成许多行，这样便于阅读
    // Use Directives manipulate the DOM elements

    // Property binding 使用 []   <img [src]="imageURL" />
    // Bind a property(imageURL) of component to a property of DOM element(src)
    // 绑定的目标是 property of DOM object 
    // Component => View

    // Attribute Binding 目的是绑定到 HTML attirbute
    // 使用 [attr.colspan]

    // Class Binding
    // Add some classes element based on some condition
    // 也就是说当满足某个条件的时候，给这个 element 添加一个 class （一个 HTML element 可以有很多个 class）

    // Style Binding
    // 把 style 和 某个条件 联系起来

    // Event Binding
    // 

    template: `
    <h2>{{ "Title: " + getTitle() }}</h2>
    <ul>
        <li *ngFor="let courseElement of courses">
            {{ courseElement }}
        </li>
    </ul>

    <img [src]="imageURL" />
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    <button (click)="onSave($event)" [style.backgourndColor]="isActive ? 'blue' : 'white'" class="btn btn-primary" [class.active]="isActive">Save</button>
    <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyUp()"/>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
    {{text | summary: 10}}
    `
})
export class CoursesComponent{
    title = "List of Courses";
    imageURL = "http://lorempixel.com/400/200";
    colSpan = 2;    // 设定 column
    isActive = true;  // class binding 
    email;
    courses;
    test = `lorem ifdklaklfdalkfda kfdlajkfldajflkda kljl`;




    getTitle(){
        return this.title;
    };
    

    // Dependency injection means injecting the dependency of a class into its constructor
    // 意思是 Angular 为你创建 objects
    // 这就是用 framework 的好处。如果对 CoursesService 加参数，不必自己改变 initialize
    // 并且如果要 test，不必写出具体的 CoursesService 的逻辑，只需写一个mock
    // 如果你显示写出object initialization, 比如 CoursesService courseService = new CoursesService()
    // 那么你会把两个类耦合在一起。
    // 如果你在 constructor 中当做 parameter传入，则 Angular 会帮你进行 dependency injection
    
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
    // If use logic for calling an HTTP service, there will be the following cons
    // 1.This will depend on the HTTP endpoints. It makes harder to execute this unit test.(take too much resource)
    // 2.This is not extenable.
    // 3.The component should not include others besides the presentation logic.
    
    // DOM evnets 
    onSave($event){
        $event.stopPropagation();     // 用来阻止 event bubbling
        console.log("button click", $event);
    }

    // Two way binding
    // 达到 Component 和 View 的相互传递信息
    // [(ngModel)]
    // 需要在 app.module 引入 FormsModel
    onKeyUp(){
        console.log("Enter pressed" + this.email);
    }
}