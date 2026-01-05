import { createApiMethod } from '@/shared/api/createApiMethod';

export interface RegisterRequest {
	email: string;
	password: string;
	confirmPassword: string;
}

export interface RegisterResponse {
	token: string;
}

export const register = createApiMethod<RegisterRequest, RegisterResponse>(
	'/auth/register',
);
