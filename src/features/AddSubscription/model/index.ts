import { CURRENCY_LABELS } from '@/shared/model/currency';
import { z } from 'zod';

export const addSubscriptionFormSchema = z.object({
	name: z.string({ message: 'Введите название' }).min(2).max(50),
	price: z.number({ message: 'Введите цену' }).min(0),
	currency: z.enum(CURRENCY_LABELS, { message: 'Выберите валюту' }),
	category: z.string({ message: 'Введите категорию' }).min(2).max(50),
	actionDate: z.date({ message: 'Выберите дату' }),
});

export type AddSubscriptionFormValues = z.infer<
	typeof addSubscriptionFormSchema
>;
