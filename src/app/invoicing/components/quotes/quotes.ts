import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation-service/navigation.service';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { QuotesServices } from '../../services/quotes/quotes';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule, NavBar],
  templateUrl: './quotes.html',
  styleUrl: './quotes.scss',
})
export class Quotes {
  activeItem = 'Quotes';
  navTitle: string = 'Quotes';


  quotesList: any[] = [];

  totalQuotes = 0;
  activeQuotes = 0;
  inactiveQuotes = 0;


  constructor(
    private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute,
    private quotesServices: QuotesServices
  ) { }

  ngOnInit(): void {
    this.getAllInvoices();
  }

  getAllInvoices(): void {
    this.quotesServices.getAllQuotesWithCustomers().subscribe({
      next: (data) => {

        this.quotesList = (data || [])
          .map(quote => ({

            quoteNumber: quote.quoteNumber || '',
            customerName: quote?.customer?.name || '',
            totalAmount: quote.totalAmount || 0,
            invoiceItems: quote.invoiceItems || [],
            dueDate: quote.dueDate ? new Date(quote.dueDate) : null,
            invoiceDate: quote.invoiceDate ? new Date(quote.invoiceDate) : null,
            status: quote.status || 'Pending',
            notes: quote.notes || '',
            id: quote.quoteNumber || ''
          }))
          .sort((a, b) => (a.invoiceDate?.getTime() ?? 0) - (b.invoiceDate?.getTime() ?? 0));

        // precompute counts for tabs
        this.totalQuotes= this.quotesList.length;
        this.activeQuotes = this.quotesList.filter(i => i.status === 'Active').length;
        this.inactiveQuotes = this.quotesList.filter(i => i.status === 'Inactive').length;
        console.log('Quotes fetched:', this.quotesList);
      },
      error: (err) => console.error('Error fetching quotes', err)
    });

  }

  navigate(url: string): void {
    this.navigationService.navigateTo(url); // Navigates to the previous route
  }



  setActive(item: string) {

    this.activeItem = item;
    this.navTitle = this.navTitle;
    this.router.navigate(['invoicing/' + item.toLowerCase()]);
  }
}
