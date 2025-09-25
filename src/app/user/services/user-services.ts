import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { FamilyMemberModel } from '../../family-tree/models/family-member.model';

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  private apiUrl = 'http://localhost:3000/user/login'; // Replace with your API

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User[]> {
    const body = { email, password };
    return this.http.post<User[]>(this.apiUrl, body);
  }

}
