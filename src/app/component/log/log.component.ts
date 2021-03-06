import {Component} from '@angular/core';
import {EventEmiterService} from '../../service/emmiter.service';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent{
  public logs = new Array<string>();

  constructor(private _eventEmiter: EventEmiterService) {
    _eventEmiter.changeEmitted$.subscribe(
      input => {
        this.logs.push(input);
      });
  }
  public onResetClick(): void {
    this.logs = new Array<string>();
  }
}
