import PasswordInput from '@/components/PasswordInput';
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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { RegisterResponse } from '../api';
import { useRegister } from '../lib/useRegister';
import type { RegisterFormValues } from '../model';
import { registerFormSchema } from '../model';

interface RegisterFormProps {
	onSuccess?: (response: RegisterResponse) => void;
}

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerFormSchema),
	});

	const { register, isLoading, error } = useRegister();

	const handleSubmit = async (values: RegisterFormValues) => {
		const response = await register(values);
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
								<Input {...field} type="email" />
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
								<PasswordInput {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Подтвердите пароль</FormLabel>
							<FormControl>
								<PasswordInput {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="w-full" type="submit" disabled={isLoading}>
					{isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
				</Button>
			</form>
		</Form>
	);
};

export default RegisterForm;
