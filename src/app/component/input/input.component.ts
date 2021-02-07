import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent{
  private submitted = false;
  private illegalRegex = '[^a-Z]';
  // illegalRegex2 = '[-]?[0-9]+[,|.]?[0-9]*[+|-|\\/|*]?[-]?[0-9]*[,|.]?[0-9]*';
  public equationForm = new FormGroup({
    equationFormControl: new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      Validators.pattern('[^a-z]*')
    ]),
  });
  @Output() equationSubmittedEvent = new EventEmitter<string>();

  get equation(): AbstractControl {
    return this.equationForm.get('equation');
  }
  public onSubmit(): void {
    this.submitted = true;
    this.equationSubmittedEvent.emit(this.equationForm.value.equation);
    this.equationForm.reset();
  }
}
