// Exchange rates relative to AUD (approximate, static for now - update monthly)
export const CURRENCY_RATES: Record<string, { symbol: string; rate: number; code: string }> = {
  AU: { symbol: 'A$', rate: 1, code: 'AUD' },
  US: { symbol: '$', rate: 0.63, code: 'USD' },
  GB: { symbol: '£', rate: 0.50, code: 'GBP' },
  CA: { symbol: 'C$', rate: 0.86, code: 'CAD' },
  NZ: { symbol: 'NZ$', rate: 1.08, code: 'NZD' },
  IN: { symbol: '₹', rate: 52.5, code: 'INR' },
  SG: { symbol: 'S$', rate: 0.84, code: 'SGD' },
  EU: { symbol: '€', rate: 0.58, code: 'EUR' }, // covers DE, FR, NL etc
  JP: { symbol: '¥', rate: 95, code: 'JPY' },
  BR: { symbol: 'R$', rate: 3.15, code: 'BRL' },
  AE: { symbol: 'AED', rate: 2.31, code: 'AED' },
  ZA: { symbol: 'R', rate: 11.5, code: 'ZAR' },
}

// Map country names to currency keys
export const COUNTRY_TO_CURRENCY: Record<string, string> = {
  'Australia': 'AU',
  'United States': 'US',
  'United Kingdom': 'GB',
  'Canada': 'CA',
  'New Zealand': 'NZ',
  'India': 'IN',
  'Singapore': 'SG',
  'Germany': 'EU',
  'France': 'EU',
  'Netherlands': 'EU',
  'Belgium': 'EU',
  'Austria': 'EU',
  'Italy': 'EU',
  'Spain': 'EU',
  'Portugal': 'EU',
  'Ireland': 'EU',
  'Finland': 'EU',
  'Greece': 'EU',
  'Japan': 'JP',
  'Brazil': 'BR',
  'United Arab Emirates': 'AE',
  'South Africa': 'ZA',
  // default everything else to US
}

export function convertPrice(audPrice: number, country: string): string {
  const currencyKey = COUNTRY_TO_CURRENCY[country] || 'US'
  const currency = CURRENCY_RATES[currencyKey]
  const converted = Math.ceil(audPrice * currency.rate)
  return `${currency.symbol}${converted}`
}

export function getUserCurrency(country: string) {
  const key = COUNTRY_TO_CURRENCY[country] || 'US'
  return CURRENCY_RATES[key]
}
