import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import ExpenseCard from '../../ExpenseCard';

const SubscriptionsList = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<h2 className="text-base font-semibold">Ваши подписки</h2>
				<Button>
					<Plus /> Добавить подписку
				</Button>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{[...Array(10)].map((_, index) => (
					<ExpenseCard
						key={index}
						title="Подписка 1"
						price={100}
						currency="USD"
						date={new Date()}
					/>
				))}
			</div>
		</div>
	);
};

export default SubscriptionsList;
