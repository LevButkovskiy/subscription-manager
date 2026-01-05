import { useCallback, useState } from 'react';

interface UseApiMutationOptions<TData> {
	defaultErrorMessage?: string;
	onSuccess?: (data: TData) => void;
	onError?: (error: unknown) => void;
}

interface UseApiMutationResult<TData, TVariables> {
	mutate: (variables: TVariables) => Promise<TData>;
	isLoading: boolean;
	error: string | null;
	resetError: () => void;
}

export const useApiMutation = <TData, TVariables>(
	mutationFn: (variables: TVariables) => Promise<TData>,
	options: UseApiMutationOptions<TData> = {},
): UseApiMutationResult<TData, TVariables> => {
	const {
		defaultErrorMessage = 'Произошла ошибка',
		onSuccess,
		onError,
	} = options;

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const mutate = useCallback(
		async (variables: TVariables): Promise<TData> => {
			setIsLoading(true);
			setError(null);

			try {
				const data = await mutationFn(variables);
				onSuccess?.(data);
				return data;
			} catch (err: unknown) {
				let errorMessage = defaultErrorMessage;

				if (err && typeof err === 'object' && 'response' in err) {
					const axiosError = err as {
						response?: { data?: { message?: string } };
					};
					errorMessage =
						axiosError.response?.data?.message || errorMessage;
				} else if (err instanceof Error) {
					errorMessage = err.message;
				}

				setError(errorMessage);
				onError?.(err);
				throw err;
			} finally {
				setIsLoading(false);
			}
		},
		[mutationFn, defaultErrorMessage, onSuccess, onError],
	);

	const resetError = useCallback(() => {
		setError(null);
	}, []);

	return { mutate, isLoading, error, resetError };
};
