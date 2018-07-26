import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigationComponent implements OnInit {

  @Output() navToggle = new EventEmitter<boolean>();

  public showNav = true;

  constructor() {
  }

  ngOnInit() {
  }

  public toggleNav() {
    this.showNav = !this.showNav;
    this.navToggle.emit(this.showNav);
  }
}
