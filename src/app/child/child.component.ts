import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() mssg: any;
  @Output () parent: EventEmitter<any> = new EventEmitter ();
  constructor() { }

  ngOnInit(): void { }
  sendData()
  {
    let item = {mesg:'Data from Child to Parent', mnum:30};
    this.parent.emit(item)
  }

}
