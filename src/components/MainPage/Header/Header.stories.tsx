import dayjs from 'dayjs';
import Header from './Header';
import {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Header> = {
	component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
	name: 'Main page header',
	args: {
		isUserTurn: true,
		timer: dayjs(0).minute(2).second(0),
	},
};
