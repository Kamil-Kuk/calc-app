import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent{
  public inputForm = new FormGroup({
    input: new FormControl(''),
  });
  @Output() equationSubmittedEvent = new EventEmitter<string>();

  public onSubmit(): void {
    this.equationSubmittedEvent.emit(this.inputForm.value.input);
    this.inputForm.reset();
  }
}
