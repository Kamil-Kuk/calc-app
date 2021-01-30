import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'calc-app';
  equation: string;
  @Output() onClick = new EventEmitter();


  public equalButtonClick(): void {
    this.onClick.emit();

  }


}
