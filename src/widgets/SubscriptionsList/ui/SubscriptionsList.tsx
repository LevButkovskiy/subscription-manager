import type { Subscription } from '@/shared/types/subscription';
import type { FC, ReactNode } from 'react';
import ExpenseCard from '../../ExpenseCard';

interface SubscriptionsListProps {
	items: Subscription[];
	headerAction?: ReactNode;
}

const SubscriptionsList: FC<SubscriptionsListProps> = ({
	items,
	headerAction,
}) => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex items-center justify-between">
				<h2 className="text-base font-semibold">Ваши подписки</h2>
				{headerAction}
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
				{items.map((item, index) => (
					<ExpenseCard
						key={index}
						title={item.name}
						price={item.price}
						currency={item.currency}
						date={item.actionDate}
					/>
				))}
			</div>
		</div>
	);
};

export default SubscriptionsList;
