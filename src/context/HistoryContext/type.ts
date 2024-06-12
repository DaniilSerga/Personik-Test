import dayjs from 'dayjs';
import {ILastMessage} from 'types/LastMessage';

export interface IHistoryContextProps {
	lastMessage: ILastMessage;
	historyLength: number;
	setLastMessage: (
		message: string,
		winner: 'user' | 'bot',
		historyLength: number,
		time: dayjs.Dayjs,
	) => void;
}
