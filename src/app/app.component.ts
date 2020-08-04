import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // title = 'hello-world';
  title = "Angular Hello-World";
  courses = [1, 2];
  post = {
    title: "Title",
    isFavorite: true,
  };

  // 如果点击 app-favorite， 则会执行下面这个方法
  // 这个方法是被 click 激活的，是从 component 传出来的
  onFavoriteChanged(eventArgs) {
    console.log("Favorite Changed: " + eventArgs);
  }
}
