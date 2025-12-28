import { DatePicker } from '@/components/DatePicker';
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { CURRENCY_LABELS } from '@/shared/model/currency';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
	addSubscriptionFormSchema,
	type AddSubscriptionFormValues,
} from '../model';

interface AddSubscriptionFormProps {
	onSubmit?: (values: AddSubscriptionFormValues) => void;
}

export const AddSubscriptionForm = ({ onSubmit }: AddSubscriptionFormProps) => {
	const form = useForm<AddSubscriptionFormValues>({
		resolver: zodResolver(addSubscriptionFormSchema),
	});

	return (
		<Form {...form}>
			<form
				onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
				className="space-y-4"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Название</FormLabel>
							<FormControl>
								<Input
									placeholder="Nitflix, Spotify..."
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="grid grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="price"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Цена</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder="499"
										{...field}
										onChange={(e) =>
											field.onChange(
												e.target.valueAsNumber,
											)
										}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="currency"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Валюта</FormLabel>
								<FormControl>
									<Select
										value={field.value}
										onValueChange={field.onChange}
									>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="Выберите валюту" />
										</SelectTrigger>
										<SelectContent>
											{CURRENCY_LABELS.map((currency) => (
												<SelectItem
													key={currency}
													value={currency}
												>
													{currency}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Категория</FormLabel>
							<FormControl>
								<Input
									placeholder="Онлайн-кинотеатр"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="actionDate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Дата действия</FormLabel>
							<FormControl>
								<DatePicker
									date={field.value}
									onDateChange={field.onChange}
									placeholder="Выберите дату"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-end gap-2">
					<Button
						type="button"
						variant="outline"
						onClick={() => form.reset()}
					>
						Отмена
					</Button>
					<Button type="submit">Сохранить</Button>
				</div>
			</form>
		</Form>
	);
};
