import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {

  public selected = 'biography';

  constructor() { }

  ngOnInit() {
  }

  public tabChanged($event) {
    this.selected = $event;
  }

}
