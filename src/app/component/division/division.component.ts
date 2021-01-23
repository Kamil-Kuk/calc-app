import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {
  numA = 125;
  numB = 3;
  numC = 999;
  numD = 0;
  divide: (baseValue: number, increment: number) => number
    = function(x,y){
    return x / y;
  };
}
