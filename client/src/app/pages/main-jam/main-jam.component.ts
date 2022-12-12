import { Component, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { HttpService } from 'src/app/services/http.service';
import { AuthState } from 'src/states/auth.state';

@Component({
  selector: 'app-main-jam',
  templateUrl: './main-jam.component.html',
  styleUrls: ['./main-jam.component.scss']
})
export class MainJamComponent implements OnInit {

  idToken$ = this.store.select((state) => state.auth.idToken);
  constructor(auth:Auth, private httpService: HttpService,private store: Store<{auth: AuthState}>){

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

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
