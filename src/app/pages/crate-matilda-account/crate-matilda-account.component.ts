import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crate-matilda-account',
  templateUrl: './crate-matilda-account.component.html',
  styleUrls: ['./crate-matilda-account.component.scss']
})
export class CrateMatildaAccountComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  changeRouterData() {
    return  this.router.navigateByUrl('/home')
  }
  getValue(e:any){
    localStorage.setItem('userData', JSON.stringify(e));
    this.changeRouterData().then(r => r)
  }
}
