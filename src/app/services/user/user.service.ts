import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/user/register';
  }
  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
