import React, {createContext} from 'react';
import {IHistoryContextProps} from './type';

export const HistoryContext = createContext<IHistoryContextProps>({
	lastMessage: '',
	setLastMessage: (message) => {},
});
