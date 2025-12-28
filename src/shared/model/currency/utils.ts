import type { Currency } from './types';

const CURRENCY_SYMBOLS: Record<Currency, string> = {
	USD: '$',
	EUR: '€',
	RUB: '₽',
};

export const getCurrencySymbol = (currency: Currency) => {
	return CURRENCY_SYMBOLS[currency];
};
