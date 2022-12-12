import { Jam } from './../../models/jam.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jam-ject',
  templateUrl: './jam-ject.component.html',
  styleUrls: ['./jam-ject.component.scss']
})
export class JamJectComponent implements OnInit {
  @Input() jamInFor! : Jam

  constructor() { }

  ngOnInit(): void {
  }

}
