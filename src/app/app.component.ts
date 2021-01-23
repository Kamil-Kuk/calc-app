import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numA = 10;
  numB = 3;
  numC = 99.99;
  numD = 10e4;
  title = 'calc-app';
}
