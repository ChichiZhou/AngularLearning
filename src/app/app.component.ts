import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'hello-world';
  title = 'Angular Hello-World';
  courses = [1,2];
  post = {
    title: "Title",
    isFavorite: true
  };

  
  onFavoriteChanged(eventArgs){
    console.log("Favorite Changed: " + eventArgs);
  }
}
