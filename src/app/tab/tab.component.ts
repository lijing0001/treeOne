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
      id: '1',
      name: 'tab1',
      text: 'tab1内容'
    }, {
      id: '2',
      name: 'tab2',
      text: 'tab2内容'
    }, {
      id: '3',
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
  public selectTabIndex: number = 0;
  @Input() modal: any;
  public checkTab(index) {
    this.active = index;
    jQuery('#rightMenusNav').css('display', 'none');
  }

  public onRightMenus(e, i) {
    event.preventDefault();
    this.selectTabIndex = i;
    if (e.which === 3) {
      this.navTop = e.clientY + 'px';
      this.navLeft = e.clientX + 'px';
      //控制右键动态变化
      jQuery('#rightMenusNav').css('display', 'block');
    }
  }

  public btnRightClick(btnKey: string,index) {
    let menuObj = {};
    menuObj['btnKey'] = btnKey;
    menuObj['rowData'] = this.rowData;
    jQuery('#rightMenusNav').css('display', 'none');
    if(btnKey == 'add'){
      let name = window.prompt('请输入标签名称:');
      let id = window.prompt('请输入标签id:');
      let text = window.prompt('请输入标签内容：');

      name && id && text && this.list.push({
        name: name,
        id:id,
        text:text
      });
    }
    if (btnKey == 'del'){
      this.list.splice(this.selectTabIndex, 1);
      console.log(index);
      this.active = index;
    }
    if (btnKey == 'delone'){
      let tab = this.list[this.selectTabIndex];

      this.list = [tab];
      this.active = index;
    }
  }

}