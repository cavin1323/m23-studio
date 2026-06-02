export type CurrencyCode = 'USD' | 'EUR' | 'JPY' | 'GBP';

export const CURRENCIES: Record<CurrencyCode, { symbol: string; rate: number }> = {
  USD: { symbol: '$', rate: 1 },
  EUR: { symbol: '€', rate: 0.92 },
  JPY: { symbol: '¥', rate: 150.5 },
  GBP: { symbol: '£', rate: 0.79 },
};

export function convertPrice(amount: number, targetCurrency: CurrencyCode): string {
  const currency = CURRENCIES[targetCurrency];
  const converted = amount * currency.rate;
  return `${currency.symbol}${converted.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
