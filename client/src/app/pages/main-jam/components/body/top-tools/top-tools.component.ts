import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-tools',
  templateUrl: './top-tools.component.html',
  styleUrls: ['./top-tools.component.scss']
})
export class TopToolsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedBackgroundIndex = 0;
  
  background = [
    "assets/white-background.png",
    "assets/nested-line-background.png",
    "assets/dot-background.png"
  ]

  @ViewChild('focusContent') element!: any ;


  onFocus(element: any){
    console.log(element)
    this.selectedBackgroundIndex = element;
  }


}
