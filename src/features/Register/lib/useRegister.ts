import { useApiMutation } from '@/shared/api/hooks/useApiMutation';
import { register } from '../api';
import type { RegisterFormValues } from '../model';

export const useRegister = () => {
	const { mutate, isLoading, error } = useApiMutation(
		async (values: RegisterFormValues) => {
			return await register({
				email: values.email.trim().toLowerCase(),
				password: values.password,
				confirmPassword: values.confirmPassword,
			});
		},
		{
			defaultErrorMessage: 'Ошибка регистрации',
		},
	);

	return {
		register: mutate,
		isLoading,
		error,
	};
};
