import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtService {
  constructor(
    private httpClient: HttpClient
    ) { }

    login(user:string, password:string) {
        return this.httpClient.post<{access_token:  string}>('http://www.your-server.com/auth/login', {user, password}).pipe(tap(res => {
        localStorage.setItem('access_token', res.access_token);
    }))
    }

    register(user:string, password:string) {
    return this.httpClient.post<{access_token: string}>('http://www.your-server.com/auth/register', {user, password}).pipe(tap(res => {
    this.login(user, password)
    }))
    }

    logout() {
      localStorage.removeItem('access_token');
    }

    public get loggedIn(): boolean{
      return localStorage.getItem('access_token') !==  null;
    }

}