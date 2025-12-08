import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { NavigationService } from '../../../shared/services/navigation.service';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { InvoiceServices } from '../../services/services/invoices';

@Component({
  selector: 'app-invoice-list',
  imports: [CommonModule, NavBar],
  templateUrl: './invoice-list.html',
  styleUrls: ['./invoice-list.scss']
})
export class InvoiceList implements OnInit {

  activeItem = 'Invoices';
  navTitle = 'Invoices';
  invoiceList: any[] = [];

  totalInvoices = 0;
  activeInvoices = 0;
  inactiveInvoices = 0;


  constructor(
    private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute,
    private invoiceServices: InvoiceServices
  ) { }

  ngOnInit(): void {
    this.getAllInvoices();
  }

  getAllInvoices(): void {
    this.invoiceServices.getAllInvoices().subscribe({
      next: (data) => {
        this.invoiceList = (data || [])
          .map(invoice => ({
          
            invoiceNumber: invoice.invoiceNumber || '',
            customerName: invoice.customer.name || '',
            totalAmount: invoice.totalAmount || 0,
            invoiceItems: invoice.invoiceItems || [],
            dueDate: invoice.dueDate ? new Date(invoice.dueDate) : null,
            invoiceDate: invoice.invoiceDate ? new Date(invoice.invoiceDate) : null,
            status: invoice.status || 'Pending',
            notes: invoice.notes || '',
            id: invoice.invoiceNumber || ''
          }))
          .sort((a, b) => (a.invoiceDate?.getTime() ?? 0) - (b.invoiceDate?.getTime() ?? 0));

        // precompute counts for tabs
        this.totalInvoices = this.invoiceList.length;
        this.activeInvoices = this.invoiceList.filter(i => i.status === 'Active').length;
        this.inactiveInvoices = this.invoiceList.filter(i => i.status === 'Inactive').length;
        console.log('Invoices fetched:', this.invoiceList);
      },
      error: (err) => console.error('Error fetching invoices', err)
    });

  }


  setActive(item: string): void {
    this.activeItem = item;
    this.navTitle = item;
    this.router.navigate([`invoicing/${item.toLowerCase()}`]);
  }
}
