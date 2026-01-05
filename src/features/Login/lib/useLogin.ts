import { useApiMutation } from '@/shared/api/hooks/useApiMutation';
import { login } from '../api';
import type { LoginFormValues } from '../model';

export const useLogin = () => {
	const { mutate, isLoading, error } = useApiMutation(
		async (values: LoginFormValues) => {
			return await login({
				email: values.email.trim().toLowerCase(),
				password: values.password,
			});
		},
		{
			defaultErrorMessage: 'Ошибка входа',
		},
	);

	return {
		login: mutate,
		isLoading,
		error,
	};
};
