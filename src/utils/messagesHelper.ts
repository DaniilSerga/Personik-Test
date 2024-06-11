import {IMessage} from 'types';

export const isCityRepeated = (city: string, history: IMessage[]) => {
	return history.some((historyCity) => historyCity.content === city);
};
