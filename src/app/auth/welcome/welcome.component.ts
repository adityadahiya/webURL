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
  public result='';

  onSubmit(address, event: Event){
    event.preventDefault();
    let parameters:any = {};
    parameters.method  = 'POST';
    parameters.url = 'get/address';
    let formData = new FormData();
    formData.append('web_url', address);
    parameters.data = formData;
    parameters.token = this.token;

    this.apiService.sendRequest(parameters, 'core')
    .subscribe(
      (data:any) => {
       if (data.result)
        this.result = data.result;
      else
        this.result = data.message;
      },
      (error:any) => {
       alert(error);
      }
    );

  
}

  ngOnInit() {
    this.token = this.storage.getItem('token');
    if(!(this.token)){
      this.router.navigateByUrl('auth/login');
    }
  }
  ngOnDestroy() {
    this.storage.reset();
  }

}
