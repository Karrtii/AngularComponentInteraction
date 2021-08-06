import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() loggedIn: boolean | undefined;
  message: string = "";
  name = "Kratos";

  constructor() {
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes);
    const loggedInValue = changes['loggedIn'];
    if (loggedInValue.currentValue == true)
          this.message = "Welcome back Kratos";
        else
          this.message = "Please log in";
  }

  greetKratos()
  {
    alert("Hey Kratos!");
  }


  // get loggedIn(): boolean | undefined {
  //   return this._loggedIn;
  // }
  //
  // @Input()
  // set loggedIn(value: boolean | undefined) {
  //   this._loggedIn = value;
  //   if (value == true)
  //     this.message = "Welcome back Kratos";
  //   else
  //     this.message = "Please log in";
  // }
}
