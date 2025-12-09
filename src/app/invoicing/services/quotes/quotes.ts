import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { API_ENDPOINTS } from '../../../shared/constants/endpoints';
import { InvoiceCustomer } from '../../models/invoice-customer';
import { Invoice } from '../../models/invoice.model';
import { Quote } from '../../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesServices {

  private apiUrl = environment.baseUrl;
  
    constructor(private http: HttpClient) {}
  
    // Fetch invoices and customers concurrently and map them
    getAllQuotesWithCustomers(): Observable<(Omit<Quote, 'customer'> & { customer?: InvoiceCustomer })[]> {
      return forkJoin({
        quotes: this.http.get<Quote[]>(this.apiUrl + API_ENDPOINTS.QUOTE.LIST),
        customers: this.http.get<InvoiceCustomer[]>(this.apiUrl + API_ENDPOINTS.CUSTOMER.LIST),
      }).pipe(
        map(({ quotes, customers }) => {
          // Create a Map for faster lookup
          const customerMap = new Map(customers.map(c => [c.id, c]));
  
          // Map each invoice to its customer
          return quotes.map(quote => ({
            ...quote,
            customer: customerMap.get(quote.customerId),
          })) as (Omit<Quote, 'customer'> & { customer?: InvoiceCustomer })[];
        })
      );
    }
  
}
