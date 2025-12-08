import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { FamilyMemberModel } from '../../family-tree/models/family-member.model';
import { environment } from '../../../environments/environment';
import { API_ENDPOINTS } from '../../shared/constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserServices {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User[]> {
    const body = { email, password };
    return this.http.post<User[]>(this.apiUrl + API_ENDPOINTS.USER.LOGIN, body);
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl + API_ENDPOINTS.USER.REGISTER, user);
  }

}
