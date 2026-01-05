import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { useState, type FC } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface PasswordInputProps
	extends Omit<React.ComponentProps<'input'>, 'type'> {
	className?: string;
}

const PasswordInput: FC<PasswordInputProps> = ({
	className,
	onChange,
	...props
}) => {
	const [value, setValue] = useState('');

	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		onChange?.(e);
	};

	const showPasswordIcon = value.length > 0;

	return (
		<div className="relative">
			<Input
				type={showPassword ? 'text' : 'password'}
				className={cn('pr-10', className)}
				onChange={handleChange}
				{...props}
			/>
			{showPasswordIcon && (
				<Button
					type="button"
					variant="ghost"
					size="sm"
					className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
					onClick={handleShowPassword}
					aria-label={
						showPassword ? 'Скрыть пароль' : 'Показать пароль'
					}
				>
					{showPassword ? (
						<EyeOff className="h-4 w-4 text-muted-foreground" />
					) : (
						<Eye className="h-4 w-4 text-muted-foreground" />
					)}
				</Button>
			)}
		</div>
	);
};

export default PasswordInput;
