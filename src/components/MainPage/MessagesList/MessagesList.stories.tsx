import {Meta, StoryObj} from '@storybook/react/*';
import MessagesList from './MessagesList';
import {IMessage} from 'types/Message';

const meta: Meta<typeof MessagesList> = {
	component: MessagesList,
};

export default meta;

const history: IMessage[] = [
	{content: 'Абакан', type: 'user'},
	{content: 'Находка', type: 'bot'},
	{content: 'Апатиты', type: 'user'},
	{content: 'Тамбов', type: 'bot'},
	{content: 'Волжский', type: 'user'},
	{content: 'Иваново', type: 'bot'},
];

type Story = StoryObj<typeof MessagesList>;

export const Primary: Story = {
	name: 'Messages list',
	args: {
		history,
	},
};
