import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Child } from '../models/child';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  updateUser(user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/user`, user);
  }

  addChild(child: Child): Observable<any> {
    return this.http.post(`${this.addChild}/child`, child);
  }
}
