import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {evaluate} from 'mathjs';
import {EventEmiterService} from '../../service/emmiter.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent{
  private submitted = false;
  private illegalRegex = '[0-9+-//*=)(^%]*';
  public equationSubmitted = '';
  public result: number;
  public equationForm = new FormGroup({
    equation: new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      Validators.pattern(this.illegalRegex)
    ]),
  });

  constructor(private _eventEmiter: EventEmiterService) {
  }

  public get equation(): AbstractControl {
    return this.equationForm.get('equation');
  }

  public onSubmit(): void {
    this.submitted = true;
    this.equationSubmitted = this.equationForm.value.equation;
    this.result = evaluate(this.equationSubmitted);
    this._eventEmiter.emitChange(this.equationSubmitted + '=' + this.result);
    this.equationForm.reset();
  }


  public parseEquationWithValidation(input: string): string[]{
    const inputArray = input.split(/[(|)]+/);
    return inputArray;
  }

  // private countParenthesis(input: string): number {
  //   let openParenthesis = 0;
  //   let closeParenthesis = 0;
  //   for (let i = 0; i < input.length; i++){
  //     if (input.charAt(i) === '('){
  //       openParenthesis++;
  //     }else if (input.charAt(i) === ')'){
  //       closeParenthesis++;
  //     }
  //   } // end for
  //   return 0;
  // }
}
