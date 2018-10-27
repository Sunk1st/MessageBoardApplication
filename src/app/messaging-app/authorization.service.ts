import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private token: string;

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  createUser(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post('http://localhost:8080/api/user/signup', authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const authData: AuthData = {email: email, password: password};
    this.http.post<{token: string}>('http://localhost:8080/api/user/login', authData)
      .subscribe(response => {
        const token = response.token;
        this.token = token;
      });
  }
}
