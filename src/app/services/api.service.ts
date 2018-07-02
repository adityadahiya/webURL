// Service for APIs call
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

// rxjs require methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

	sendRequest(parameters, server) {
		var url = "";
		var data = parameters.data;

		// set headers
		const headers = new Headers({
			'Authorization': parameters.token,
			'Client': "web"
		});

		// get server param (if dynamic)
		if (server == 'core') {
			url = environment.base + parameters.url;
		
		}
		var url = url;
		var data = data;
		
		if (parameters.method == 'POST' && parameters.token == undefined) {
			console.log(url);
			const headers = new Headers({
				'Client': "web",
				'Key': 'KEY29062018',
			});
			return this.http.post(url, data, { headers: headers })
				.map((response: Response) => response.json())
				.catch((error) => Observable.throw(error.json().message || 'Server error'));
		}
		
		else if (parameters.method == 'POST') {
			const headers = new Headers({
				'Authorization': 'Bearer ' + parameters.token,
				'Client': "web",
				'Key': 'KEY29062018',
			});
			return this.http.post(url,data, { headers: headers })
				.map((response: Response) => response.json())
				.catch((error) => error.json());
		}

	}

}
