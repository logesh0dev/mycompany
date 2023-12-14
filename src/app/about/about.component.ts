import { Component, Input, OnInit, Output,EventEmitter, SimpleChanges } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() inputstring: string;
  @Output() cancelinput = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simplechanges: SimpleChanges)
  {
    console.log('1',simplechanges)
    for(let val in simplechanges){
      const changes=simplechanges[val]
      console.log('2',changes)
      console.log(changes.currentValue)
      console.log(changes.firstChange)
      console.log(changes.previousValue)

    }
  }


  clearinput(){
    this.cancelinput.emit()
  }
}
