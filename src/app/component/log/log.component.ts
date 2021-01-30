import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  @Input() equationInLog: string;

  constructor() { }

}
