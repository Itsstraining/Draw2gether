import { AuthService } from './../../../../services/auth.service';
import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';
import { AuthActions } from 'src/actions/auth.action';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],

  animations: [
    trigger('open', [

    ])
  ]

})
export class BodyComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private store: Store<{auth:AuthState}>
    ) {}

  login(){
    this.store.dispatch(AuthActions.login());
  }


  ngOnInit(): void {
  }

}
