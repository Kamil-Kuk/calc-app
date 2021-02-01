import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'calc-app';

  public equation: string;

  addEquation(newInput: string): void {
    this.equation = newInput;
  }
}
