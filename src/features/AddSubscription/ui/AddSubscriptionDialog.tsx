import ResponsiveDialog from '@/components/ResponsiveDialog/ResponsiveDialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const AddSubscriptionDialog = () => {
	const [open, setOpen] = useState(false);

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
			<form>
				<Input
					type="text"
					placeholder="Название подписки"
					className="w-full p-2 border rounded"
				/>
				<Input
					type="number"
					placeholder="Цена"
					className="w-full p-2 border rounded"
				/>
				<Button onClick={() => setOpen(false)}>Сохранить</Button>
			</form>
		</ResponsiveDialog>
	);
};

export default AddSubscriptionDialog;
