// src/app/utils/string-utils.ts

export const generateInvoiceNumber = (prefix: string = 'INV', id: number = 0): string => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${prefix}-${year}${month}-${id.toString().padStart(4, '0')}`;
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const truncateString = (str: string, maxLength: number): string => {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
};