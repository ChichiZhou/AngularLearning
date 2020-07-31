import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';   // import EventEmitter

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

// In order to make the component re-usable, we need to add input and output properties
// Input is used to pass State to the component
// Output is used to read Events from the component
// Input and Output make the public API of the component
// 
export class FavoriteComponent {
  // 这里用到了 alias，因为当你改变 component 的时候，template 没有改变
  @Input('is-favorite') isFavorite = false;   // 这样可以将 isFavorite 设定成能从外界赋值的状态
  // 这里用到了 alias，因为当你改变 component 的时候，template 没有改变
  @Output('change') change = new EventEmitter();

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }

}
