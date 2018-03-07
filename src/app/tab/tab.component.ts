import { Component, ViewChild, ElementRef, Input, Output, HostListener, EventEmitter } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-tab',
  templateUrl: './tab.html',
  styleUrls: ['./tab.scss'],
})
export class TabComponent {

  constructor() {
  }
  public active = 0;

  public checkTab(index) {
    this.active = index;
  }

}