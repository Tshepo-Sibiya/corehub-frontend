// currency-data.ts

export interface CountryCurrency {
    country: string;
    currency: string;
    symbol: string;
}

export const countryCurrencies: CountryCurrency[] = [
    { country: 'United States', currency: 'USD', symbol: '$' },
    { country: 'United Kingdom', currency: 'GBP', symbol: '£' },
    { country: 'Eurozone', currency: 'EUR', symbol: '€' },
    { country: 'Japan', currency: 'JPY', symbol: '¥' },
    { country: 'Canada', currency: 'CAD', symbol: 'C$' },
    { country: 'Australia', currency: 'AUD', symbol: 'A$' },
    { country: 'Switzerland', currency: 'CHF', symbol: 'CHF' },
    { country: 'China', currency: 'CNY', symbol: '¥' },
    { country: 'India', currency: 'INR', symbol: '₹' },
    { country: 'South Africa', currency: 'ZAR', symbol: 'R' },
    { country: 'Brazil', currency: 'BRL', symbol: 'R$' },
    { country: 'Russia', currency: 'RUB', symbol: '₽' },
    { country: 'Mexico', currency: 'MXN', symbol: '$' },
    { country: 'South Korea', currency: 'KRW', symbol: '₩' },
    { country: 'Singapore', currency: 'SGD', symbol: 'S$' },
];
export function getCurrencyByCountry(country: string): CountryCurrency | undefined {
    return countryCurrencies.find(cc => cc.country === country);
}