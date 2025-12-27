import { Button } from '@/components/ui/button';

export const HomePage = () => {
	return (
		<div>
			HomePage
			<div className="border-2 rounded-md border-dashed p-8 flex flex-col items-center justify-center bg-gray-100 gap-2">
				<p className="text-1xl font-bold">Нет подписок</p>
				<p className="text-center text-gray-500">
					Начните добавлять подписки, чтобы отслеживать свои расходы
				</p>
				<Button>Добавить подписку</Button>
			</div>
		</div>
	);
};
