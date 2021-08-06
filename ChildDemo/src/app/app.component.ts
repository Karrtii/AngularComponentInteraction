import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  userLoggedIn = true;
  @ViewChild(ChildComponent, {static: false}) childComponentRef: ChildComponent;


  constructor(childComponentRef: ChildComponent) {
    this.childComponentRef = childComponentRef;
  }

  ngAfterViewInit(): void {
    this.childComponentRef.message = "Message from parent component";
  }
}
