import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  pageTitle = 'Angular Component Interaction';
  imgUrl = "https://picsum.photos/200";
  count = 0;
  name: string = "";
  username: string = "";
  private _customerName: string = "";
  anotherName: string = "";
  @ViewChild("anotherNameRef") nameElementRef: ElementRef;


  constructor(nameElementRef: ElementRef) {
    this.nameElementRef = nameElementRef;
  }

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

//getter
  get customerName(): string {
    return this._customerName;
  }
  //setter
  set customerName(value: string) {
    this._customerName = value;
    if(value == "Kratos")
    {
      alert("Hello Kratos");
    }
  }

//binding
  incrementCount() {
    this.count += 1;
  }

  //split two way binding
  greetKratos(updateValue: string)
  {
    this.username = updateValue;
    if(updateValue == "Kratos")
    {
      alert("Welcome back Kratos");
    }
  }


}
