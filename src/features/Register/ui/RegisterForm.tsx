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
import type { RegisterFormValues } from '../model';
import { registerFormSchema } from '../model';

interface RegisterFormProps {
	onSubmit?: (values: RegisterFormValues) => void;
}

const RegisterForm = ({ onSubmit }: RegisterFormProps) => {
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerFormSchema),
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
								<Input type="password" {...field} />
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
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="w-full" type="submit">
					Зарегистрироваться
				</Button>
			</form>
		</Form>
	);
};

export default RegisterForm;
