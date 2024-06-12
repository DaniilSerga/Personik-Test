import React, {createContext} from 'react';
import {IHistoryContextProps} from './type';

export const HistoryContext = createContext<IHistoryContextProps>({
	lastMessage: {message: '', winner: 'bot'},
	historyLength: 0,
	setLastMessage: (message, winner, historyLength) => {},
});
