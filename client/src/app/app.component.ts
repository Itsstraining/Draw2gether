import { HttpService } from './services/http.service';
import { Component, HostBinding } from '@angular/core';
import { from } from 'rxjs';

import{
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations'
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  animations: [
    
  ]


})
export class AppComponent {
  title = 'client';
  user = false;
}
