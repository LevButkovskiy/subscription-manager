import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.email({ message: 'Неверный email' }),
	password: z.string({ message: 'Введите пароль' }).min(8).max(50),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
