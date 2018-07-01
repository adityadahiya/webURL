import { Component, OnInit } from '@angular/core';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageService,
    private apiService: ApiService,
  ) { }

  public token; 
  public url='';

  onSubmit(address, event: Event){
    event.preventDefault();
    let parameters:any = {};
    parameters.method  = 'POST';
    parameters.url = 'get/address';
    let formData = new FormData();
    formData.append('web_url', address);
    parameters.data = formData;
    parameters.token = undefined;

    this.apiService.sendRequest(parameters, 'core')
      .subscribe(
        (data:any) => {
         console.log(data);
        this.url = data.result;
        },
        (error:any) => {
         alert(error);
        }
      );

    //this.url = 'hello fgkdbvzdkbvjzdbvjkb'
    
  }

  ngOnInit() {
    this.token = this.storage.getItem('message');
    console.log(this.token);
    if(this.token != 'User have signed in successfully'){
      this.router.navigateByUrl('auth/login');
    }
  }
  ngOnDestroy() {
    this.storage.reset();
  }

}
