import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core"; // import EventEmitter

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"],
})

// In order to make the component re-usable, we need to add input and output properties
// Input is used to pass State to the component
// Output is used to read Events from the component
// Input and Output make the public API of the component
// Component 的 public API 指的是，其它 component 能够对这个 component 进行某些操作
// 具体做法是将一些 property 设置成 input property
// 虽然 DOM 不包括这些 property，但是通过自己的改写，能够让其实现这个操作
export class FavoriteComponent {
  // 这里用到了 alias，因为当你改变 component 的时候，template 没有改变
  @Input("is-favorite") isFavorite = false; // 这样可以将 isFavorite 设定成能从外界赋值的状态
  // 这里用到了 alias，因为当你改变 component 的时候，template 没有改变
  @Output("changeThisStar") changeThisStar = new EventEmitter();

  title: string;

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.changeThisStar.emit({ newValue: this.isFavorite });
  }
}
