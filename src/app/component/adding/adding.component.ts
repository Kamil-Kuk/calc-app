import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
// function add(x: number,y: number): number {
//   return x + y;
// }

export class AddingComponent {
  numA = 10;
  numB = 3;
  numC = 99.99;
  numD = 10e4;
  add: (baseValue: number, increment: number) => number
    = function(x,y){
    return x + y;
  };
}
