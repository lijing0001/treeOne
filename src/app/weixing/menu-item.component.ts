import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.html',
  styleUrls: ['./menu-item.scss']
})
export class MenuItemComponent {
  public menuItems: any[];
  public showHoverElem: boolean;
  public hoverElemHeight: number;
  public hoverElemTop: number;
}
