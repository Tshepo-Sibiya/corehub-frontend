export interface InvoiceItem {
  description: string;
  price: number;
  quantity: number;
  discount: number;
  totalLineCost: number;
  vat: number;
  vatLineAmount: number;
  archived: boolean;
}
