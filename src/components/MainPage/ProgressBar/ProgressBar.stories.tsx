import {Meta, StoryObj} from '@storybook/react/*';
import ProgressBar from './ProgressBar';
import dayjs from 'dayjs';

const meta: Meta<typeof ProgressBar> = {
	component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
	args: {
		timer: dayjs().minute(1).second(34),
	},
};
