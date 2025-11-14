export const formatCurrency = (value: number, currency: string = 'USD', locale?: string) => {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
