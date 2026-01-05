import { AppLayout } from '@/components/layout/AppLayout';
import { HomePage } from '@/pages/home/ui/HomePage';
import { LoginPage } from '@/pages/login/ui/LoginPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
]);
