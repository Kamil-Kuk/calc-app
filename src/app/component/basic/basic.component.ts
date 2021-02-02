import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  private submitted = false;
  private illegalRegex = '[^a-z]*';
  public equationSubmitted = '';
  public result: Number;

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

  public onSubmit(): void {
    this.submitted = true;
    this.equationSubmitted = this.equationForm.value.equation;
    this.result = Number.parseFloat(this.equationSubmitted);
    this.equationForm.reset();
  }

  // private validateInput(input: string[]): string[]{
  //   for (let i of input){
  //     if(i.match())
  //   }
  // }

  public parseEquationWithValidation(input: string): string[]{
    const inputArray = input.split(/[(|))]+/);
    return inputArray;
  }
}
