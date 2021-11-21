import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-out-matilda-account',
  templateUrl: './log-out-matilda-account.component.html',
  styleUrls: ['./log-out-matilda-account.component.scss']
})
export class LogOutMatildaAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public logout(){
    localStorage.removeItem('userData')
    localStorage.removeItem('token')
    localStorage.removeItem('yourMatildaAccount')
  }
}
