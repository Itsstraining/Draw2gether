import { NavbarComponent } from './../../../../components/navbar/navbar.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
