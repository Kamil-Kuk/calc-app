import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = 'calc-app';
  private submitted = false;
  private illegalRegex = '[^a-z]*';
  public equationSubmitted = '';
  public equationForm = new FormGroup({
    equation: new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      Validators.pattern(this.illegalRegex)
    ]),
  });

  get equation(): AbstractControl {
    return this.equationForm.get('equation');
  }

  constructor() {
  }

  public onSubmit(): void {
    this.submitted = true;
    this.equationSubmitted = this.equationForm.value.equation;
    this.equationForm.reset();
  }
}
