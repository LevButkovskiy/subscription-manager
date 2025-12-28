import { CURRENCY_LABELS } from '@/shared/model/currency';
import { z } from 'zod';

export const addSubscriptionFormSchema = z.object({
	name: z.string().min(2).max(50),
	price: z.number().min(0),
	currency: z.enum(CURRENCY_LABELS),
	category: z.string().min(2).max(50),
	actionDate: z.date(),
});

export type AddSubscriptionFormValues = z.infer<
	typeof addSubscriptionFormSchema
>;
