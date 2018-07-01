import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service'

@Injectable()
export class AuthService {

  constructor(private storage: StorageService) { }

  get isLoggedIn() {
  	// check for token present
  	if(this.storage.getItem('message')=="User have signed in successfully"){
  		return true
  	}
  	else{
  		return false;
  	}
  }

}
