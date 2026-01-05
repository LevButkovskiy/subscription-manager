import { Button } from '@/components/ui/button';
import LoginForm from '@/features/Login';
import type { LoginFormValues } from '@/features/Login/model';
import RegisterForm from '@/features/Register';
import type { RegisterFormValues } from '@/features/Register/model';
import { Wallet } from 'lucide-react';
import { useState, type FC } from 'react';

export const LoginPage: FC = () => {
	const [isLogin, setIsLogin] = useState(true);

	const handleSwitchForm = () => {
		setIsLogin((prev) => !prev);
	};

	const handleLogin = (values: LoginFormValues) => {
		console.log(values);
	};

	const handleRegister = (values: RegisterFormValues) => {
		console.log(values);
	};

	return (
		<div className="flex fixed inset-0 items-center justify-center bg-muted/30 ">
			<div className="flex flex-col items-center justify-center gap-4 bg-white shadow-sm border rounded-2xl p-4 sm:p-8 w-full max-w-md mx-4">
				<div className="flex flex-col items-center justify-center gap-2 text-center">
					<div className="inline-flex p-4 bg-foreground rounded-xl mb-2">
						<Wallet className="text-white size-6" />
					</div>
					<h1 className="text-2xl font-semibold">Трекер Подписок</h1>
					<h2 className="text-sm text-muted-foreground">
						Управляйте повторяющимися расходами
					</h2>
				</div>
				<div className="flex flex-col gap-2 w-full">
					{isLogin ? (
						<LoginForm onSubmit={handleLogin} />
					) : (
						<RegisterForm onSubmit={handleRegister} />
					)}
					<Button
						variant="ghost"
						size="sm"
						onClick={handleSwitchForm}
					>
						{isLogin ? 'Создать аккаунт' : 'Уже есть аккаунт'}
					</Button>
				</div>
			</div>
		</div>
	);
};
