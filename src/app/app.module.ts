import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import {ReactiveFormsModule} from '@angular/forms'
import "../app/components/button/button.component";
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './layout/card/card.component';
import { PopupComponent } from './layout/popup/popup.component';
import { HomeComponent } from './pages/home/home.component';
import { LabelComponent } from './components/label/label.component';
import {AuthGuard} from "./helpers/auth.guard";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { FormsModule } from '@angular/forms';
import { CrateMatildaAccountComponent } from './pages/crate-matilda-account/crate-matilda-account.component';
import { LogOutMatildaAccountComponent } from './pages/log-out-matilda-account/log-out-matilda-account.component';
import { ErrorValidationComponent } from './components/error-validation/error-validation.component';
import {RegisterComponent} from "./pages/register/register.component";
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    CardComponent,
    PopupComponent,
    HomeComponent,
    LabelComponent,
    routingComponents,
    PageNotFoundComponent,
    CrateMatildaAccountComponent,
    LogOutMatildaAccountComponent,
    ErrorValidationComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
