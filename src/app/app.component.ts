import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  showPara = false;
  logger :any =[];
  logValues(){
    this.showPara = !this.showPara;
    this.logger.push(this.logger.length);
  }


}
