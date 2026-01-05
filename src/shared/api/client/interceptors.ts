import type {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';
import { apiInstance } from './index';

/**
 * Обработка 401 (неавторизован)
 */
const handleUnauthorized = (
	error: AxiosError<unknown, InternalAxiosRequestConfig>,
) => {
	if (error.response?.status === 401) {
		if (window.location.pathname === '/login') {
			return;
		}

		window.location.href = '/login';
	}
};

/**
 * Обработчик успешных ответов
 */
const responseSuccessHandler = (response: AxiosResponse): AxiosResponse => {
	return response;
};

/**
 * Обработчик ошибок
 */
const responseErrorHandler = (
	error: AxiosError<unknown, InternalAxiosRequestConfig>,
): Promise<AxiosError> => {
	handleUnauthorized(error);
	return Promise.reject(error);
};

/**
 * Настройка interceptors
 */
export const setupInterceptors = () => {
	apiInstance.interceptors.response.use(
		responseSuccessHandler,
		responseErrorHandler,
	);
};
