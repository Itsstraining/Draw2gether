import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { HttpService } from 'src/app/services/http.service';
import { AuthState } from 'src/states/auth.state';

@Component({
  selector: 'app-main-jam',
  templateUrl: './main-jam.component.html',
  styleUrls: ['./main-jam.component.scss']
})
export class MainJamComponent implements OnInit {

  user?: User | null;
  idToken$ = this.store.select((state) => state.auth.idToken);
  constructor(auth:Auth, private httpService: HttpService,private store: Store<{auth: AuthState}>,authService: AuthService){
    authService.getAuthState().subscribe((user) => {
      this.user = user;
      console.log(user);
    })
  }

  ngOnInit(): void {
    this.idToken$.subscribe( (value) => {
    
      if(value){
        console.log('cc')
        let user =  this.httpService.createUser(value);
        user.subscribe((value) => {
          if(value){
            console.log(value);
          }else{
            console.log('Account has been already created')
          }
        });
      }
    })
  }

  




}
