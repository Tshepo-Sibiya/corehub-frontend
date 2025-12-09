import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { API_ENDPOINTS } from '../../../../shared/constants/endpoints';
import { Invoice } from '../../../models/invoice.model';
import { InvoiceCustomer } from '../../../models/invoice-customer';


@Injectable({
  providedIn: 'root'
})
export class InvoiceServices {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  // Fetch invoices and customers concurrently and map them
  getAllInvoicesWithCustomers(): Observable<(Omit<Invoice, 'customer'> & { customer?: InvoiceCustomer })[]> {
    return forkJoin({
      invoices: this.http.get<Invoice[]>(this.apiUrl + API_ENDPOINTS.INVOICE.LIST),
      customers: this.http.get<InvoiceCustomer[]>(this.apiUrl + API_ENDPOINTS.CUSTOMER.LIST),
    }).pipe(
      map(({ invoices, customers }) => {
        // Create a Map for faster lookup
        const customerMap = new Map(customers.map(c => [c.id, c]));

        // Map each invoice to its customer
        return invoices.map(invoice => ({
          ...invoice,
          customer: customerMap.get(invoice.customerId),
        })) as (Omit<Invoice, 'customer'> & { customer?: InvoiceCustomer })[];
      })
    );
  }

  // Original method kept for backward compatibility if needed
  getAllInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.apiUrl + API_ENDPOINTS.INVOICE.LIST);
  }
}
