import { Component, OnInit, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/core"; // import EventEmitter

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"],
})

// In order to make the component re-usable, we need to add input and output properties
// Input is used to pass State to the component 可以从外界给 component 内部的值进行赋值
// Output is used to read Events from the component component 可以 raise event 到外界
// Input and Output make the public API of the component
// Component 的 public API 指的是，其它 component 能够对这个 component 进行某些操作
export class FavoriteComponent {
  // 这里用到了 alias，因为当你改变 component 的时候，template 没有改变
  @Input("is-favorite") isFavorite = false; // 这样可以将 isFavorite 设定成能从外界赋值的状态

  // 这里用到了 alias，因为当你改变 component 的时候，template 没有改变
  // 这里声明了一个发射事件的对象
  @Output("changeThisStar") changeThisStar = new EventEmitter();

  title: string;

  onClick() {
    this.isFavorite = !this.isFavorite;
    // raise the event
    // 可以传递一个值，这个值会传给所以 subscriber of this event
    this.changeThisStar.emit("FUCK USA!!!!!!!" + this.isFavorite);
  }
}
