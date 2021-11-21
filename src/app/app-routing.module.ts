import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./helpers/auth.guard";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {CrateMatildaAccountComponent} from "./pages/crate-matilda-account/crate-matilda-account.component";
import {LogOutMatildaAccountComponent} from "./pages/log-out-matilda-account/log-out-matilda-account.component";

const routes: Routes = [
  {path:'', component:RegisterComponent},//canActivate:[AuthGuard]
  {path:'create-account', component:CrateMatildaAccountComponent},
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'log-out-account', component:LogOutMatildaAccountComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
export const routingComponents =[LoginComponent, RegisterComponent, HomeComponent]
