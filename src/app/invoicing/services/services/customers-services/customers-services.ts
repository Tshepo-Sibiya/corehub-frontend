import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { API_ENDPOINTS } from '../../../../shared/constants/endpoints';
import { InvoiceCustomer } from '../../../models/invoice-customer';
import { Invoice } from '../../../models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersServices {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<InvoiceCustomer[]> {
    return this.http.get<InvoiceCustomer[]>(this.apiUrl + API_ENDPOINTS.CUSTOMER.LIST);
  }

  createCustomer(payload: InvoiceCustomer): Observable<InvoiceCustomer> {
    return this.http.post<InvoiceCustomer>(this.apiUrl + API_ENDPOINTS.CUSTOMER.CREATE, payload);
  }


}
