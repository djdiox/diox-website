import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss']
})
export class TabBarComponent implements OnInit {

  @Input() public tabs: string[] = [];
  @Output() selected = new EventEmitter<string>();
  @Input() public current: string = null;

  constructor() {
  }

  ngOnInit() {
    if (!current) {
      this.current = this.tabs[0];
    }
  }

  public select(current: string) {
    this.current = current;
    this.selected.next(current);
  }
}
