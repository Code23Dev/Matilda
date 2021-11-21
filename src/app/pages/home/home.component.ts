import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Users} from "./users";

// @ts-ignore
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}
  todo = [{id:1,name:"data",description:"data",user:""}];
  inProgress = [{id:1,name:"dataP",description:"data",user:""}];
  done = [{id:1,name:"dataF",description:"data",user:""}];

  drop(event: CdkDragDrop<Array<any>>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    localStorage.setItem('toDoList', JSON.stringify(this.todo));
    localStorage.setItem('inProgressList', JSON.stringify(this.inProgress));
    localStorage.setItem('doneList', JSON.stringify(this.done));
  }
  create(){
    this.nameValue=''
    this.descriptionValue=''
    this.selectedValue=null
    localStorage.setItem('toDoList', JSON.stringify(this.todo));
    localStorage.setItem('inProgressList', JSON.stringify(this.inProgress));
    localStorage.setItem('doneList', JSON.stringify(this.done));
    this.showPopup()
  }
  detail(e:any){
    this.selectedValue=Number(e.user)
    this.delete=true
    this.update=true
    this.save=false
    this.elementId=e.id
    this.nameValue=e.name
    this.descriptionValue=e.description
    this.showPopup()
  }
  elementId=null
  nameValue=''
  descriptionValue=''
  show=false
  delete=false
  update=false
  save=true
  users!: Users[];
  // @ts-ignore
  selectedValue=JSON.parse(localStorage.getItem('selected'))
  // @ts-ignore
  namedata=JSON.parse(localStorage.getItem('userData')).organizationName
  ngOnInit(): void {
    // @ts-ignore
   this.name=JSON.parse(localStorage.getItem('userData')).organizationName
   this.userTest(this.selectedValue)
    // @ts-ignore
    this.todo = JSON.parse(localStorage.getItem('toDoList'))
    // @ts-ignore
    this.inProgress = JSON.parse(localStorage.getItem('inProgressList'))
    // @ts-ignore
    this.done = JSON.parse(localStorage.getItem('doneList'))
  }
   userTest(selectedValue:any) {
     let getUserData =localStorage.getItem('users')
     if (getUserData != null) {
       if (selectedValue==null){
         this.users = JSON.parse(getUserData)
       }else{
         this.users = JSON.parse(getUserData)
       }
     }
   }
   updateSelect(selectUserData:any){
    // @ts-ignore
     JSON.parse(localStorage.getItem('users')).filter((e:any,i:any)=>{
        if(selectUserData == e.id){
          // @ts-ignore
          this.array_move(JSON.parse(localStorage.getItem('users')),i,0)
        }
      })
     localStorage.setItem('selected',JSON.stringify(this.selectedValue))
      this.userTest(this.selectedValue)
  }
   array_move(arr:any, old_index:any, new_index:any) {
     localStorage.setItem('users', JSON.stringify(arr))
     let tmp = arr[new_index]
     arr[new_index] = arr[old_index]
     arr[old_index] = tmp
     localStorage.setItem('users', JSON.stringify(arr));
  };
   getValue(e:any){
     this.save=true
     let i=3
     console.log(++i)
     this.todo.push({id:i+1,name:e.name,description:e.description,user:this.selectedValue})
     this.create()
     this.closePopup()
   }
  updateFunc(u:any){
    this.todo.filter((e:any)=>{
      if (e.id==this.elementId){
        this.todo.push({id:e.id,name:u.name,description:u.description,user:u.user})
        console.log(u)
      }
    })
  }
  deleteFunc(){
    // @ts-ignore
    let toDoListData = JSON.parse(localStorage.getItem('toDoList'))
    // @ts-ignore
    let inProgressListData = JSON.parse(localStorage.getItem('inProgressList'))
    // @ts-ignore
    let doneListData = JSON.parse(localStorage.getItem('doneList'))
    let AllTask =[]
    AllTask.push(...toDoListData,...inProgressListData,...doneListData)
    AllTask.filter(e=>{
      if (e.id==this.elementId){
        console.log(e)
      }
    })
  }
  closeFunc(){
     this.closePopup()
  }
  closePopup(){
    this.show=false
    this.delete=false
    this.update=false
    this.save=true
  }
  showPopup(){
     this.show=true
  }
}
