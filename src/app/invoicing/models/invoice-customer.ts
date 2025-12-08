export interface InvoiceCustomer {
    
  name: string;
  email: string;
  phone?: string;
  archived: boolean;
  id?: string; // optional, for storing MongoDB _id if needed
}
