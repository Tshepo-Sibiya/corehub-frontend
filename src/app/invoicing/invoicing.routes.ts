import { Routes } from '@angular/router';
import { InvoicingOverview } from './components/invoicing-overview/invoicing-overview';
import { InvoiceList } from './components/invoice-list/invoice-list';
import { InvoiceSettings } from './components/invoice-settings/invoice-settings';
import { InvoicingCustomers } from './components/invoicing-customers/invoicing-customers';


export const INVOICING_ROUTES: Routes = [
    { path: '', component: InvoicingOverview },
    { path: 'invoices', component: InvoiceList },
    { path: 'settings', component: InvoiceSettings },
    { path: 'overview', component: InvoicingOverview },
    { path: 'customers', component: InvoicingCustomers },
    // { path: 'add-new-family-member', component: AddFamilyMember },

    // { path: 'clients', component: ClientsComponent },
    // { path: 'invoices', component: InvoicesComponent },
    // { path: 'settings', component: SettingsComponent },
    // { path: '**', redirectTo: 'overview' }
];
