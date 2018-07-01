import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';
import { WelcomeComponent } from './auth/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ 
    AuthService,
    AuthGuard,
    ApiService,
    StorageService]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
