import { apiInstance } from './client';

export const createApiMethod = <TRequest, TResponse>(url: string) => {
	return async (body: TRequest): Promise<TResponse> => {
		const response = await apiInstance.post<TResponse>(url, body);
		return response.data;
	};
};
