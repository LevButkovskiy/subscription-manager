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
import { loginFormSchema, type LoginFormValues } from '../model';

interface LoginFormProps {
	onSubmit?: (values: LoginFormValues) => void;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginFormSchema),
	});

	return (
		<Form {...form}>
			<form
				onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
				className="space-y-4"
			>
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
				<Button className="w-full" type="submit">
					Войти
				</Button>
			</form>
		</Form>
	);
};

export default LoginForm;
