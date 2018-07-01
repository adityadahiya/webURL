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

		// POST request w/o token
		if (parameters.method == 'POST' && parameters.token == undefined) {
			console.log(url);
			return this.http.post(url, data, { headers: headers })
				.map((response: Response) => response.json())
				.catch((error) => Observable.throw(error.json().message || 'Server error'));
		}
		
		// GET request
		else if (parameters.method == 'GET') {
			const headers = new Headers({
				'Authorization': 'Bearer ' + parameters.token,
				'Client': "web",
				'key': 'TcS99L07QkDezB5n4Qdw',
				'content-type': 'application/x-www-form-urlencoded'
			});
			//console.log('cehck')
			return this.http.get(url, { headers: headers })
				.map((response: Response) => response.json())
				.catch((error) => error.json());
		}

	}

}
