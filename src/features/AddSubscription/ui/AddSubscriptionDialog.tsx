import ResponsiveDialog from '@/components/ResponsiveDialog/ResponsiveDialog';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import type { AddSubscriptionFormValues } from '../model';
import { AddSubscriptionForm } from './AddSubscriptionForm';

interface AddSubscriptionDialogProps {
	onSubmit?: (values: AddSubscriptionFormValues) => void;
}

const AddSubscriptionDialog = ({ onSubmit }: AddSubscriptionDialogProps) => {
	const [open, setOpen] = useState(false);

	const handleSubmit = (values: AddSubscriptionFormValues) => {
		onSubmit?.(values);
		setOpen(false);
	};

	return (
		<ResponsiveDialog
			open={open}
			onOpenChange={setOpen}
			title="Добавить подписку"
			description="Заполните форму для добавления новой подписки"
			trigger={
				<Button variant="outline">
					<Plus />
					Добавить подписку
				</Button>
			}
		>
			<AddSubscriptionForm onSubmit={handleSubmit} />
		</ResponsiveDialog>
	);
};

export default AddSubscriptionDialog;
