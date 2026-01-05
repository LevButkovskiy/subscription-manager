import { createApiMethod } from '@/shared/api/createApiMethod';

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	token: string;
}

export const login = createApiMethod<LoginRequest, LoginResponse>(
	'/auth/login',
);
