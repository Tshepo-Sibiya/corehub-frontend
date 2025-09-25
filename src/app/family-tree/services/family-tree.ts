import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FamilyMemberModel } from '../models/family-member.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyTreeService {

  private apiUrl = 'http://localhost:3000/family-member'; // Replace with your API

  constructor(private http: HttpClient) { }

  getFamilyMembers(): Observable<FamilyMemberModel[]> {
     return this.http.get<FamilyMemberModel[]>(this.apiUrl);
  }

}
