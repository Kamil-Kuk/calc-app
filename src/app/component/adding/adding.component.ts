import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})

export class AddingComponent {
  numA = 10;
  numB = 3;
  numC = 99.99;
  numD = 10e4;
  add: (baseValue: number, increment: number) => number
    = function(x, y){
    return x + y;
  };
}
