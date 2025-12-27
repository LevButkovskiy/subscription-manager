import type { FC, ReactNode } from 'react';

interface AppLayoutProps {
	children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<header></header>
			<main className="flex-1 p-4 xl:px-80">{children}</main>
		</div>
	);
};
