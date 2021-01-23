import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent {
  numA = 45;
  numB = 43;
  numC = 15;
  numD = 5.5;
  subtract: (baseValue: number, increment: number) => number
    = function(x,y){
    return x - y;
  };
}
