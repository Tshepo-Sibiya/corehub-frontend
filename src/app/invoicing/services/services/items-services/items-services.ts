import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { API_ENDPOINTS } from '../../../../shared/constants/endpoints';
import { InvoiceCustomer } from '../../../models/invoice-customer';
import { InvoiceItem } from '../../../models/invoice-item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsServices {


  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllInvoiceItems(): Observable<InvoiceItem[]> {
    return this.http.get<InvoiceItem[]>(this.apiUrl + API_ENDPOINTS.INVOICEITEMS.LIST);
  }
  
}
