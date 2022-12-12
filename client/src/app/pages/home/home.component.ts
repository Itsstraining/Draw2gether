import { Jam } from './../../models/jam.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }



  listJams: Jam[] = [];

  ngOnInit(): void {
    // console.log(this.listJams.length)
  }
  addListJam() {
    console.log(this.listJams.length);

    let newJam = {
      id : Date.now(),
      title: "Jam-01",
      createdDate: Date.now(),
      owner: 'Khang'
    }
    this.listJams.push(
      newJam
    );
    console.log(this.listJams.length);
  }



}
