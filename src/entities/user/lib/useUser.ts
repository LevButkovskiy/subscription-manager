import { useEffect } from 'react';
import { useUserStore } from '../model/store';

export const useUser = () => {
	const { user, loading, initialized, setUser, fetchUser, clearUser } =
		useUserStore();

	useEffect(() => {
		if (loading || initialized) return;
		fetchUser();
	}, [loading, initialized, fetchUser]);

	return { user, loading, initialized, setUser, fetchUser, clearUser };
};
