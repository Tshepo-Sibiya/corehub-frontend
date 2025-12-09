import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../shared/services/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBar } from '../../shared/components/nav-bar/nav-bar';
import { ItemsServices } from '../../services/services/items-services/items-services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  imports: [
    CommonModule,
    FormsModule,
    NavBar],
  templateUrl: './items.html',
  styleUrl: './items.scss'
})
export class Items implements OnInit {
  activeItem = 'Items';
  navTitle: string = 'Items';
  invoiceItemsList: any[] = [];
  searchTerm: string = '';
  activeTab: string = 'all';
  archivedCount = 0;
  activeCount = 0;
  totalCount = 0;
  constructor(private navigationService: NavigationService,
    private router: Router,
    private route: ActivatedRoute,
    private itemsServices: ItemsServices) { }


  ngOnInit(): void {
    this.getAllInvoiceItems();
  }


  getAllInvoiceItems(): void {
    this.itemsServices.getAllInvoiceItems().subscribe({
      next: (data) => {
        this.invoiceItemsList = (data || [])
          .map(item => ({
            description: item.description || '',
            price: item.price || 0,
            taxable: item.taxable || false,
            archived: item.archived || false,
          }));

        // Calculate counts ONCE here
        this.totalCount = this.invoiceItemsList.length;
        this.archivedCount = this.invoiceItemsList.filter(i => i.archived).length;
        this.activeCount = this.invoiceItemsList.filter(i => !i.archived).length;
      },
      error: (err) => console.error('Error fetching invoices', err)
    });
  }

  goBack(): void {
    this.navigationService.goBack(); // Navigates to the previous route
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
