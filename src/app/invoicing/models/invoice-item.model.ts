export interface InvoiceItem {
  description: string;
  price: number;
  vat: number;
  taxable: boolean;
  archived: boolean;
}
