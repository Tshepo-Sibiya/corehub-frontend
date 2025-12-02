// src/app/utils/number-utils.ts

export const calculateTotal = (items: { price: number; quantity: number }[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const calculateTax = (amount: number, taxRate: number): number => {
  return amount * (taxRate / 100);
};

export const calculateDiscount = (amount: number, discountRate: number): number => {
  return amount - amount * (discountRate / 100);
};
export const formatNumber = (num: number, decimals: number = 2): string => {
    return num.toFixed(decimals);
};