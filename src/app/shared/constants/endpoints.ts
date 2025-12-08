
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
  AUTH: {
    REFRESH: 'auth/refresh',
    LOGOUT: 'auth/logout',
  }
};
