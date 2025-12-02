import { Routes } from '@angular/router';
import { InvoicingOverview } from './components/invoicing-overview/invoicing-overview';
import { InvoiceList } from './components/invoices/invoice-list';

import { InvoicingCustomers } from './components/invoicing-customers/invoicing-customers';
import { Items } from './components/items/items';
import { Quotes } from './components/quotes/quotes';
import { InvoiceSettingsComponent } from './components/invoice-settings/invoice-settings';



export const INVOICING_ROUTES: Routes = [
    { path: '', component: InvoicingOverview },
    { path: 'invoices', component: InvoiceList },

    { path: 'settings', component: InvoiceSettingsComponent },
    { path: 'overview', component: InvoicingOverview },
    { path: 'customers', component: InvoicingCustomers },
    { path: 'items', component: Items },
    { path: 'quotes', component: Quotes },
    // { path: 'add-new-family-member', component: AddFamilyMember },

    // { path: 'clients', component: ClientsComponent },
    // { path: 'invoices', component: InvoicesComponent },
    // { path: 'settings', component: SettingsComponent },
    // { path: '**', redirectTo: 'overview' }
];
