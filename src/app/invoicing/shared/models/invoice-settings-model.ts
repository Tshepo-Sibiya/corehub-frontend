export interface InvoiceSettings {
    companyName: string;
    registrationNumber: string;
    vatNumber: string;
    vatRate: number;
    emailAddress: string;
    telephone?: string;
    invoiceNotes?: string;

    // Bank details
    accountNumber: number;
    bankName: string;
    branchName: string;
    branchCode: string;

    // Address details
    addressLineOne: string;
    addressLineTwo?: string;
    suburb: string;
    city: string;
    province: string;
    country: string;
    postalCode: number;
}
