import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  test = 'testing-technical-task';
  constructor(public router: Router) {

  }

  ngOnInit(): void {

  }
  getValue(e:any){
    if (e.password != ''){
    }
  }
}
