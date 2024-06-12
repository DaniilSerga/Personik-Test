import {createContext} from 'react';
import {IHistoryContextProps} from './type';
import dayjs from 'dayjs';

export const HistoryContext = createContext<IHistoryContextProps>({
	lastMessage: {message: '', winner: 'bot', time: dayjs(0)},
	historyLength: 0,
	setLastMessage: (message, winner, historyLength, time) => {},
});
