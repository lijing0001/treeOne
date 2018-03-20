import { Component, ViewChild, ElementRef, Input, Output, HostListener, EventEmitter } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class NavComponent {
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
              name: 'child3',
              children: [
                {
                  id: 1111,
                  name: 'child31'
                }, {
                  id: 1121,
                  name: 'child41',
                  children: [
                    {
                      id: 11211,
                      name: 'child313'
                    }, {
                      id: 11212,
                      name: 'child414'
                    },

                  ]
                },

              ]
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
  @Input() public textField: string = 'name';


  @Output() public nodeClick: EventEmitter<any> = new EventEmitter();

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
    console.log(item, event, index, istrue)
    event && event.stopPropagation();
    if (!item['selected']) {
      item['selected'] = !item['selected'];
    }

    item['active'] = !item['active'];


    if (item['selected']) {
      this.index = index;
    } else {
      this.index = null;
    }

    this.nodeClick.emit({
      item: this.index === null ? null : item,
    });

  }

  public onNodeClick(item: any) {

    let selected = [this.index];
    selected = selected.concat(item);

    let data = [];
    this.nodeClick.emit({
      item: data[data.length - 1],
    });

  }


}