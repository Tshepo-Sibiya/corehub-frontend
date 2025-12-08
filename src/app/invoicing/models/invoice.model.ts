import { InvoiceStatus } from "../enums/invoice.enum";
import { InvoiceItem } from "./invoice-item.model";


export interface Invoice {
  invoiceNumber: string;
  customerId: string;
  totalAmount: number;
  invoiceItems: InvoiceItem[];
  dueDate: Date;
  invoiceDate: Date;
  status: InvoiceStatus;
  notes?: string;
}
