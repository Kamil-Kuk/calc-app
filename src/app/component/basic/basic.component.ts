import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {evaluate} from 'mathjs';
import {EventEmiterService} from '../../service/emmiter.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent{
  private submitted = false;
  private illegalRegex = '[0-9+-//*)(^%]*';
  public equationSubmitted = '';
  public result: number;
  public equationFormGroup = new FormGroup({
    equation: new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      Validators.pattern(this.illegalRegex)
    ]),
  });

  constructor(private _eventEmiter: EventEmiterService) {
  }

  public get equation(): AbstractControl {
    return this.equationFormGroup.get('equation');
  }

  public onSubmit(): void {
    // this.trimDelimiter();
    this.submitted = true;
    this.equationSubmitted = this.equation.value;
    this.result = evaluate(this.equationSubmitted);
    this._eventEmiter.emitChange(this.equationSubmitted + '=' + this.result);
    this.equation.setValue('');
  }


  public parseEquationWithValidation(input: string): string[]{
    const inputArray = input.split(/[(|)]+/);
    return inputArray;
  }

  public onButtonClick(i: string): void {
    this.equation.setValue([this.equation.value + i]);
  }

  // private trimDelimiter(): void {
  //   if(this.equationSubmitted.endsWith(',')){
  //     this.equationSubmitted.replace(',','0');
  //   }
  // }
}
