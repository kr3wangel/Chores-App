import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  private url = environment.apiUrl;
  private readonly userKey = 'User';

  constructor(private http: HttpClient) {
    if (this.user) {
      this.isLoggedIn = true;
    }
  }

  get user(): User {
    return JSON.parse(localStorage.getItem(this.userKey));
  }

  login(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}/user/authenticate`, user).pipe(
      tap(authUser => {
        this.isLoggedIn = true;
        localStorage.setItem(this.userKey, JSON.stringify(authUser));
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(this.userKey);
    console.log('logged out');
  }
}
