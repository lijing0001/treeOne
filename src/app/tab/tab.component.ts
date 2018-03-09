import { Component, ViewChild, ElementRef, Input, Output, HostListener, EventEmitter } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-tab',
  templateUrl: './tab.html',
  styleUrls: ['./tab.scss'],
})
export class TabComponent {

  constructor() {
  }
  public list = [
    {
      id: 1,
      name: 'tab1',
      text: 'tab1内容'
    }, {
      id: 2,
      name: 'tab2',
      text: 'tab2内容'
    }, {
      id: 3,
      name: 'tab3',
      text: 'tab3内容'
    },
  ];
  public alongBtns = [
    {
      btnKey: 'add',
      btnName: '创建'
    },
    {
      btnKey: 'del',
      btnName: '关闭'
    }, {
      btnKey: 'delone',
      btnName: '关闭其他'
    }
  ]
  public active = 0;
  public navTop: string = '';
  public navLeft: string = '';
  public rowData: Object = {};
  @Input() modal: any;
  public checkTab(index) {
    this.active = index;
  }

  public onRightMenus(e, tab) {
    event.preventDefault();
    console.log(e, tab)
    if (e.which === 3) {
      this.navTop = e.clientY + 'px';
      this.navLeft = e.clientX + 'px';
      this.rowData = tab;
      //控制右键动态变化
      jQuery('#rightMenusNav').css('display', 'block');
    }
  }

  public btnRightClick(btnKey: string) {
    let menuObj = {};
    menuObj['btnKey'] = btnKey;
    menuObj['rowData'] = this.rowData;
    jQuery('#rightMenusNav').css('display', 'none');
    console.log(menuObj);
  }

}