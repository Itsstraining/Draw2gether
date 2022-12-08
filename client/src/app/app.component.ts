import { Component, HostBinding } from '@angular/core';
import { from } from 'rxjs';

import{
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  animations: [
    
  ]


})
export class AppComponent {
  title = 'client';
}
