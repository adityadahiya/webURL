import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
  	private apiService: ApiService,
  	private router: Router,
  	private storage: StorageService
  ) { }

  ngOnInit() {
  }

  showPassword(){
    let passwordEle = document.getElementById('password-input') as HTMLInputElement;
    let crossEyeEle = document.getElementsByClassName('eye-password')[0]  as HTMLInputElement;
    if(passwordEle.type == 'text'){
      passwordEle.type = 'password';
      crossEyeEle.style.opacity= '0.5';
    }
    else{
      passwordEle.type = 'text';
      crossEyeEle.style.opacity= '1';
    }
    
  }

  onLogin(email, password, event: Event){
    event.preventDefault();
 
    let parameters:any = {};
    parameters.method  = 'POST';
    parameters.url = 'user/auth/login';

    let formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);
    parameters.token = undefined;
    parameters.data = formData;

    this.apiService.sendRequest(parameters, 'core')
      .subscribe(
        (data:any) => {
          this.storage.setItem('message', data.message);
          this.storage.setItem('token', data.token);
          this.router.navigate(['auth/welcome']);
        },
        (error:any) => {
          alert(error)
        }
      );
  }

}
