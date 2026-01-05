import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout: FC = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<header></header>
			<main className="flex-1 p-4 xl:px-80">
				<Outlet />
			</main>
		</div>
	);
};
