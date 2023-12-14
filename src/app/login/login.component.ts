import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputdata=''

  constructor() { }

 
  ngOnInit(): void {
  }

  clearinput(){
    this.inputdata=''
  }

}
