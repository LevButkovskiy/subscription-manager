import AddSubscriptionDialog from '@/features/AddSubscription/ui/AddSubscriptionDialog';
import SubscriptionsList from '@/widgets/SubscriptionsList';
import type { FC } from 'react';

export const HomePage: FC = () => {
	return (
		<div>
			<SubscriptionsList headerAction={<AddSubscriptionDialog />} />
		</div>
	);
};
