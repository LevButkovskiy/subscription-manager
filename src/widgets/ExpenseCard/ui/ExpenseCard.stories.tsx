import type { Meta, StoryObj } from '@storybook/react';

import ExpenseCard from './ExpenseCard';

const meta: Meta<typeof ExpenseCard> = {
	title: 'widgets/ExpenseCard',
	component: ExpenseCard,
};

export default meta;
type Story = StoryObj<typeof ExpenseCard>;

export const Default: Story = {};
