import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';
import { Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  courseList:any = [];
  selectedCourse:string = null;

  constructor(
  	private apiService: ApiService,
  	private router: Router,
  	private storage: StorageService) { 
  }

  ngOnInit() {

  }
  
  onRegister(name, email, password, event: Event){
    event.preventDefault();

     let parameters:any = {};
     parameters.method  = 'POST';
     parameters.url = 'user/auth/register';
     let formData = new FormData();
     formData.append('username', name);
     formData.append('email', email);
     formData.append('password', password);
     parameters.data = formData;
     parameters.token = undefined;
 
     this.apiService.sendRequest(parameters, 'core')
       .subscribe(
         (data:any) => {
          console.log(data);
           this.router.navigateByUrl('auth/login');
         },
         (error:any) => {
          alert(error);
         }
       );
 
       return false;
     
    }


    
      
  }

