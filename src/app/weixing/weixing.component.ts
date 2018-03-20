import { Component } from '@angular/core';

@Component({
  selector: 'app-wei',
  templateUrl: './weixing.html',
  styleUrls: ['./weixing.scss']
})
export class WeiComponent {
  public menuItems: any[];
  public showHoverElem: boolean;
  public hoverElemHeight: number;
  public hoverElemTop: number;
}
