import { useUser } from '@/entities/user/lib/useUser';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout: FC = () => {
	const { loading } = useUser();

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="min-h-screen flex flex-col">
			<header></header>
			<main className="flex-1 p-4 xl:px-80">
				<Outlet />
			</main>
		</div>
	);
};
