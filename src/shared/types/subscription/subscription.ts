import type { Currency } from '@/shared/model/currency';

export interface Subscription {
	name: string;
	price: number;
	currency: Currency;
	category: string;
	actionDate: Date;
}
