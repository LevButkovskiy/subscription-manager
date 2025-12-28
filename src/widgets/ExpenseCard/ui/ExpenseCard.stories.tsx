import type { Meta, StoryObj } from '@storybook/react';

import ExpenseCard from './ExpenseCard';

const meta: Meta<typeof ExpenseCard> = {
	title: 'widgets/ExpenseCard',
	component: ExpenseCard,
	decorators: [
		(Story) => (
			<div className="grid grid-cols-5 gap-4">
				<Story />
				<Story />
				<Story />
				<Story />
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof ExpenseCard>;

export const Default: Story = {
	args: {
		title: 'Expense Card',
		category: 'Category',
		price: 100,
		currency: 'USD',
		date: new Date(2021, 0, 1),
		color: 'blue',
	},
};
