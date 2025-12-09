import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceSettings } from '../../models/invoice-settings-model';
import { environment } from '../../../../../environments/environment';
import { API_ENDPOINTS } from '../../../../shared/constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class InvoiceSettingsService {
  //private apiUrl = 'http://localhost:3000/invoice-settings/'; // Replace with your API

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getInvoiceSettings(): Observable<InvoiceSettings> {

    return this.http.get<InvoiceSettings>(this.apiUrl + API_ENDPOINTS.INVOICESETTINGS.GETINVOICESETTINS);


  }

  createOrUpdateInvoiceSettings(settings: InvoiceSettings): Observable<InvoiceSettings> {
    return this.http.post<InvoiceSettings>(this.apiUrl + 'createOrUpdateInvoiceSettings', settings);
  }


}
