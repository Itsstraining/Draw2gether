import { NavbarComponent } from './../../../../components/navbar/navbar.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/states/auth.state';
import { Observable } from 'rxjs';
import { idToken } from '@angular/fire/auth';
import { AuthActions } from 'src/actions/auth.action';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  idToken$!: Observable<string>;
  constructor(private store: Store <{auth: AuthState}>) { 
    this.idToken$ = this.store.select((store) => store.auth.idToken);
    
  }

  
  ngOnInit(): void {
    this.idToken$.subscribe((idToken) => {
      //console.log(idToken)
   
    })
  }
 

  selectedIndex =  2;
  selectedBackgroundIndex = 0;
  
  background = [
    "assets/white-background.png",
    "assets/nested-line-background.png",
    "assets/dot-background.png"
  ]
  
  leftSideList = [
    "fi fi-rr-pencil",
    "fi fi-rr-broom",
    "fi fi-rr-cursor",
    "fi fi-rr-text",
    "fi fi-rr-picture",
  ];


  @ViewChild('focusContent') element!: any ;


  onFocus(element: any){
    console.log(element)
    // this.element.nativeElement.className = element;
    // let pen=  document.getElementsByClassName("fi-rr-pencil")[0] as HTMLElement
    // console.log(pen)
    // pen.style.color = "blue";
    // console.log("Pencil");
    // if(this.element.nativeElement.className == element){
    //   this.element.nativeElement.style.color = "red";
    // }
    this.selectedIndex = element;
  }


  logout(){
    this.store.dispatch(AuthActions.logout());
  }

}
