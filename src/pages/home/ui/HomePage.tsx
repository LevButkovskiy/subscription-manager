import AddSubscriptionDialog from '@/features/AddSubscription';
import type { AddSubscriptionFormValues } from '@/features/AddSubscription/model';
import type { Subscription } from '@/shared/types/subscription';
import SubscriptionsList from '@/widgets/SubscriptionsList';
import { useState, type FC } from 'react';

export const HomePage: FC = () => {
	const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

	const handleAddSubscription = (values: AddSubscriptionFormValues) => {
		setSubscriptions((prev) => [...prev, values]);
	};

	return (
		<div>
			<SubscriptionsList
				items={subscriptions}
				headerAction={
					<AddSubscriptionDialog onSubmit={handleAddSubscription} />
				}
			/>
		</div>
	);
};
