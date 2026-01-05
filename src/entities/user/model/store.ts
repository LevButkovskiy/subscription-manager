import { create } from 'zustand';
import { getMe } from '../api';
import type { IUser } from './types';

interface IUserStore {
	user: IUser | null;
	loading: boolean;
	initialized: boolean;
	setUser: (user: IUser) => void;
	fetchUser: () => Promise<IUser>;
	clearUser: () => void;
}

export const useUserStore = create<IUserStore>((set) => ({
	user: null,
	loading: false,
	initialized: false,
	setUser: (user) => set({ user, initialized: true }),
	fetchUser: async () => {
		set({ loading: true });
		const user = await getMe();
		set({ user, loading: false, initialized: true });
		return user;
	},
	clearUser: () => set({ user: null, loading: false, initialized: false }),
}));
