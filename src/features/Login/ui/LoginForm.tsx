import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useUser } from '@/entities/user/lib/useUser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { LoginResponse } from '../api';
import { useLogin } from '../lib/useLogin';
import { loginFormSchema, type LoginFormValues } from '../model';

interface LoginFormProps {
	onSuccess?: (response: LoginResponse) => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
	const { fetchUser } = useUser();

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginFormSchema),
	});

	const { login, isLoading, error } = useLogin();

	const handleSubmit = async (values: LoginFormValues) => {
		const response = await login(values);
		await fetchUser();
		onSuccess?.(response);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleSubmit)}
				className="space-y-4"
			>
				{error && (
					<div className="text-sm text-destructive bg-destructive/10 p-2 rounded">
						{error}
					</div>
				)}
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="w-full" type="submit" disabled={isLoading}>
					{isLoading ? 'Вход...' : 'Войти'}
				</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
