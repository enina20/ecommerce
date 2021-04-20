import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleValue = true;
  @Output() toggleEvent = new EventEmitter<boolean>();

  constructor() { }

  toggledState(){
    if( this.toggleValue === undefined ){
      this.toggleValue = true;
    }
    this.toggleValue = !this.toggleValue;
    console.log(this.toggleValue);
    this.toggleEvent.emit(this.toggleValue)

  }
}
