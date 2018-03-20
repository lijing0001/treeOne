import { Component, ViewChild, ElementRef, Input, Output, HostListener, EventEmitter } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-nav-list',
  templateUrl: './navList.html',
  styleUrls: ['./navList.scss']
})
export class NavListComponent {
  @Input() node = [
    {
      id: 1,
      name: 'lijing',
      children: [
        {
          id: 11,
          name: 'child1',
          children: [
            {
              id: 111,
              name: 'child3'
            }, {
              id: 112,
              name: 'child4'
            },

          ]
        }, {
          id: 12,
          name: 'child2'
        }

      ]
    }, {
      id: 2,
      name: 'lianxi',
      children: [
        {
          id: 121,
          name: 'child22',
          children: [
            {
              id: 1211,
              name: 'children222'
            }
          ]
        }, {
          id: 122,
          name: 'child23'
        },

      ]
    }, {
      id: 3,
      name: 'nav'
    }
  ];
  @Input() istrue: boolean = false;
  @Output() public nodeClick: EventEmitter<any> = new EventEmitter();
  @Input() public textField: string = 'name';
  @Input() public showName(item) {
    return item == null ? '未知' : item[this.textField] || item['name'];
  };
  public selectedName;
  public isShow: boolean = true;
  public index: any = null;
  constructor() {
  }
  public liClick(item: any, index: any) {
    let object = item;
    item['active'] = !item['active'];
  }



  public textClick(item: any, event: any, index: any, istrue: boolean = false) {

    event && event.stopPropagation();
    console.log(item, event, index, istrue)
    if (!item['selected']) {
      item['selected'] = !item['selected'];
    }


    if (item['selected']) {
      this.index = index;
    } else {
      this.index = null;
    }

    this.nodeClick.emit([this.index]);

  }


  public onNodeClick(item: any) {

    let data = [this.index];

    data = data.concat(item);

    this.nodeClick.emit(data);

  }





}