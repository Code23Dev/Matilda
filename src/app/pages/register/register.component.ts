import { Component, OnInit } from '@angular/core';
import {AppComponent} from "../../app.component";
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm=new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required)
  })
  get email(){return this.registerForm.get('email')}
  public name: string=''
  public isLogin:boolean =false
  constructor(public appComp: AppComponent, public router: Router) { }
  changeRouter() {
   return  this.router.navigateByUrl('/create-account')
  }
  token(){
    this.appComp.token()
  }
  ngOnInit(): void {
    this.token()
  }

  getValue(e:any){
   let allUsers=[
      {id: 0,name:"User-1"},
      {id: 1,name:"User-1"},
      {id: 2,name:"User-1"},
      {id: 3,name:"User-1"}
    ];
    let todo = [{id:0,name:"data",description:"data",user:""}];
    let inProgress = [{id:1,name:"dataP",description:"data",user:""}];
    let done = [{id:2,name:"dataF",description:"data",user:""}];
   let selectedItem=0
    if(e.username !=='' && e.password !=='' && e.email !==''){
      let x = { username: e.username, password:e.password, email:e.email}
      localStorage.setItem('users', JSON.stringify(allUsers));
      localStorage.setItem('yourMatildaAccount', JSON.stringify(x));
      localStorage.setItem('selected',JSON.stringify(selectedItem))


      localStorage.setItem('toDoList', JSON.stringify(todo));
      localStorage.setItem('inProgressList', JSON.stringify(inProgress));
      localStorage.setItem('doneList', JSON.stringify(done));
      this.token()
      this.changeRouter()
    }else {

    }
  }
}

export class IsLogin {
}
