import { z } from 'zod';

export const registerFormSchema = z
	.object({
		email: z.email({ message: 'Неверный email' }),
		password: z
			.string({ message: 'Введите пароль' })
			.min(8, { message: 'Пароль должен содержать минимум 8 символов' })
			.max(50, { message: 'Пароль не должен превышать 50 символов' }),
		confirmPassword: z.string({ message: 'Подтвердите пароль' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
