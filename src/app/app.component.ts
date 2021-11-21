import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public token(){
  let haveThisUser:any= localStorage.getItem('userData') ? true : false
    localStorage.setItem('token', haveThisUser);
  }

  ngOnInit(): void {
  }
}
