
export const API_ENDPOINTS = {
    USER: {
        LOGIN: 'user/login',
        REGISTER: 'user/register',
        PROFILE: 'user/profile',
    },
    INVOICE: {
        CREATE: 'invoice/create',
        LIST: 'invoice/getInvoices',
        GET: (id: string) => `invoice/${id}`,
    },
    INVOICEITEMS: {
        CREATE: 'invoice-item/createInvoiceItem',
        LIST: 'invoice-item/getInvoiceItems',
        GET: (id: string) => `invoice/${id}`,
    },
    INVOICESETTINGS: {
        CREATE: 'invoice-settings/createOrUpdateInvoiceSettings',
        GETINVOICESETTINGS: 'invoice-settings/getInvoiceSettingsByUserId',
        GET: (id: string) => `invoice/${id}`,
    },
    QUOTE: {
        CREATE: 'quote/createQuote',
        LIST: 'quote/getQuotes',
        GET: (id: string) => `invoice/${id}`,
    },
    CUSTOMER: {
        CREATE: 'customer/createCustomer',
        LIST: 'customer/getUserCustomers',
        GET: (id: string) => `customer/${id}`,
    },
    AUTH: {
        REFRESH: 'auth/refresh',
        LOGOUT: 'auth/logout',
    }
};
