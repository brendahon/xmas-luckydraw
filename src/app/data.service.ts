import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //uri = 'http://localhost:4000/api/v1/users';
  uri = window.location.protocol + "//" + window.location.host + "/api/v1/users";

  constructor(private http: HttpClient) { }

  getRandomUser() {
    return this.http.get('');
  }

  getUsers() {
    return this
           .http
           .get(`${this.uri}`);
    }

  addUser(name, email) {
    const obj = {
      name: name,
      email: email
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }


}
