import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  toggleValue:boolean = true;
  toggledState($event: boolean){
    console.log('admin', $event);
    this.toggleValue = $event;
  }
}
