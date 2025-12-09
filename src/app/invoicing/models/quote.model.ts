import { InvoiceStatus } from "../enums/invoice.enum";
import { InvoiceCustomer } from "./invoice-customer";
import { InvoiceItem } from "./invoice-item.model";


export interface Quote {
  quoteNumber: string;
  customerId: string;
  customerName: string;
  customer: InvoiceCustomer;
  totalAmount: number;
  invoiceItems: InvoiceItem[];
  dueDate: Date;
  invoiceDate: Date;
  status: InvoiceStatus;
  notes?: string;
}
