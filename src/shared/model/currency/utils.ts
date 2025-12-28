import type { Currency } from './types';

const CURRENCY_SYMBOLS_MAP: Record<Currency, string> = {
	USD: '$',
	EUR: '€',
	RUB: '₽',
};

export const CURRENCY_LABELS: Currency[] = Object.keys(
	CURRENCY_SYMBOLS_MAP,
) as Currency[];

export const getCurrencySymbol = (currency: Currency) => {
	return CURRENCY_SYMBOLS_MAP[currency];
};
