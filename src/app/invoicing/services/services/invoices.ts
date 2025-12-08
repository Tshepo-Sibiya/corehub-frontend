import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { API_ENDPOINTS } from '../../../shared/constants/endpoints';
import { User } from '../../../user/models/user.model';
import { Invoice } from '../../models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServices {
    private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl + API_ENDPOINTS.INVOICE.LIST);
  }


}


