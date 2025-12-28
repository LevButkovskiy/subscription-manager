import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { formatDate } from '@/shared/lib/date';
import { getCurrencySymbol, type Currency } from '@/shared/model/currency';
import { cva, type VariantProps } from 'class-variance-authority';
import { Calendar, Pencil, Trash2 } from 'lucide-react';

const expenseCardVariants = cva(
	'flex flex-col gap-2 bg-white border border-gray-300 rounded-md p-4 border-l-4 hover:bg-gray-100 transition-colors',
	{
		variants: {
			color: {
				default: 'border-l-gray-500',
				blue: 'border-l-blue-500',
				green: 'border-l-green-500',
			},
		},
		defaultVariants: {
			color: 'default',
		},
	},
);

interface ExpenseCardActionsProps {
	showEdit?: boolean;
	showDelete?: boolean;

	canEdit?: boolean;
	canDelete?: boolean;

	onEdit?: () => void;
	onDelete?: () => void;
}

interface ExpenseCardProps
	extends VariantProps<typeof expenseCardVariants>,
		ExpenseCardActionsProps {
	title: string;
	category?: string;
	price: number;
	currency: Currency;
	date: Date;
}

const ExpenseCard = ({
	title,
	category,
	price,
	currency,
	date,
	color,
	showEdit = true,
	showDelete = true,
	canEdit = true,
	canDelete = true,
	onEdit,
	onDelete,
}: ExpenseCardProps) => {
	return (
		<div className={cn(expenseCardVariants({ color }), 'group')}>
			<div className="flex  justify-between">
				<div className="flex flex-col gap-1">
					<p className="text-black font-semibold text-lg">{title}</p>
					<p className="text-gray-500 text-sm">{category}</p>
				</div>
				<div className="flex gap-1 opacity-0 transition-opacity duration-300  group-hover:opacity-100">
					{showEdit && (
						<Button
							variant="ghost"
							size="icon-sm"
							className="hover:bg-gray-200"
							onClick={onEdit}
							disabled={!canEdit}
						>
							<Pencil className="size-4 text-gray-500" />
						</Button>
					)}
					{showDelete && (
						<Button
							variant="ghost"
							size="icon-sm"
							className="hover:bg-gray-200"
							onClick={onDelete}
							disabled={!canDelete}
						>
							<Trash2 className="size-4 text-gray-500" />
						</Button>
					)}
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex items-end gap-1">
					<p className="text-black text-2xl font-semibold">{price}</p>
					<p className="text-gray-500 text-sm mb-0.5">
						{getCurrencySymbol(currency)}
					</p>
				</div>
				<div className="flex items-center gap-1 ">
					<Calendar className="size-3 text-gray-500" />
					<p className="text-gray-500 text-xs">{formatDate(date)}</p>
				</div>
			</div>
		</div>
	);
};

export default ExpenseCard;
