import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {
  numA = 15;
  numB = 4;
  numC = 86;
  numD = 0.3;
  multiply: (baseValue: number, increment: number) => number
    = function(x,y){
    return x - y;
  };

}
