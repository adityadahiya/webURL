import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { WelcomeComponent } from './auth/welcome/welcome.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [{
    path: 'auth',
    component: AuthComponent,
    resolve: [AuthGuard],
    children: [{
      path: 'welcome',
      component: WelcomeComponent,
      data:{
      	'title': 'Welcome'
      }
    },{
      path: 'login',
      component: LoginComponent,
      data:{
      	'title': 'Login'
      }
    },
    {
      path: 'signup',
      component: SignupComponent,
      data:{
        'title': 'Signup'
      }
    }]
  },
  {
    path: '',
    redirectTo: 'auth/welcome',
    pathMatch: 'full'
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
