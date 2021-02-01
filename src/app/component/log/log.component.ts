import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  // public logs: string[] = [];
  @Input() equationInLog: string;

  // constructor() {
  //   this.logs.push(this.equationInLog);
  // }
}
