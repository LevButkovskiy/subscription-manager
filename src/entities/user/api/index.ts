import { createApiMethod } from '@/shared/api';
import type { IUser } from '../model/types';

export const getMe = createApiMethod<void, IUser>('/users/me');
